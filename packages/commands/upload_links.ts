const fs = require("fs");
const csv = require("csv-parser");
// TODO: default tsconfig from turborepo needs work for CLI commands
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");

const tableName = "amorris-links-03";
const region = "us-west-2";

const baseClient = new DynamoDBClient({ region });
const client = DynamoDBDocument.from(baseClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
  },
});

interface TagInfo {
  pk: string;
  sk: string;
  count: number;
  lastUpdated: string;
  name: string;
}
type Tags = { [tag: string]: TagInfo };

interface CsvItem {
  uri: string;
  subtitle: string;
  tags: string;
  url: string;
  uid: string;
  shared: string;
  type: string;
}
const items: CsvItem[] = [];

/** Upload links in batches.
 * Technical note (data duplication):
 *   We duplicate links for each tag they have.
 *   This allows efficient partitioning, sorting, and lookup.
 */
async function uploadLinks({ batchSize }: { batchSize: number }) {
  let batch = [];
  const uploadBatch = (batch) =>
    client.batchWrite({
      RequestItems: {
        [tableName]: batch.map((item) => ({ PutRequest: item })),
      },
    });
  for (const data of items) {
    // Note: In one case, tags contained a leading whitespace character, so we trim
    for (const tag of data.tags.split(/,/)) {
      const sk = `${data.shared}/${tag}/${data.uid}`;
      batch.push({
        Item: {
          pk: tag, // Primary function: Look up by tag (#tech)
          sk: sk, // Primary sort: Order by date (2021, 2022)
          ...data,
        },
      });
      if (batch.length === batchSize) {
        await uploadBatch(batch);
        console.log(`${new Date().getTime()}: Uploaded ${batchSize} items`);
        batch = [];
      }
    }
  }
  if (batch.length > 0) {
    await uploadBatch(batch);
  }
}

async function uploadTags({
  tags,
  batchSize,
}: {
  tags: Tags;
  batchSize: number;
}) {
  let batch = [];
  const uploadBatch = (batch) =>
    client.batchWrite({
      RequestItems: {
        [tableName]: batch.map((item) => ({ PutRequest: item })),
      },
    });
  for (const tagItem of Object.values(tags)) {
    batch.push({
      Item: tagItem,
    });
    if (batch.length === batchSize) {
      await uploadBatch(batch);
      console.log(`${new Date().getTime()}: Uploaded ${batchSize} items`);
      batch = [];
    }
  }
  if (batch.length > 0) {
    await uploadBatch(batch);
  }
}

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

async function buildTags() {
  const tags: Tags = {};
  const createTag = (item, tag) => {
    tags[tag] = {
      count: 1,
      lastUpdated: item.shared,
      pk: `//tags`, // Will use // as an "index" convention
      // Putting ephemeral data in the sort key means
      // we may end up forced to delete and recreate the item
      // whenever links are added, adding complexity
      sk: tag,
      name: capitalize(tag),
    };
  };
  // |up-next| this logic should run on link insertion via DynamoDB stream -> Lambda
  // Or simpler, should be tightly colocated with insertions in the business logic
  const updateTag = (item, tag) => {
    const current = tags[tag];
    const n = current.count + 1;
    const date =
      item.shared > current.lastUpdated ? item.shared : current.lastUpdated;
    tags[tag] = {
      ...current,
      count: n,
      lastUpdated: date,
    };
    console.log(tags[tag]);
  };
  for (const item of items) {
    for (const tag of item.tags.split(/,/)) {
      if (!tags[tag]) {
        createTag(item, tag);
      } else {
        updateTag(item, tag);
      }
    }
  }
  debugTags(tags);
  return tags;
}

function debugTags(tags: { [key: string]: TagInfo }) {
  console.log(
    Object.entries(tags).sort((a, b) => {
      return a[1].sk < b[1].sk ? -1 : 1;
    })
  );
}

async function main() {
  await uploadLinks({ batchSize: 10 });
  // const tags = await buildTags();
  // debugTags(tags);
  // await uploadTags({ tags, batchSize: 10 });
}

fs.createReadStream(`${__dirname}/../../data/links-2022-02-08.csv`)
  .pipe(csv())
  .on("data", async (data) => {
    // NOTE: Airtable csv exports are UTF-8 with a BOM (byte order marker)
    // And this will not support it. Exports must be re-saved or your first
    // data key will contain the BOM within it.
    items.push(data);
  })
  .on("end", main);
