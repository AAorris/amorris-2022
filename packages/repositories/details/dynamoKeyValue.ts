import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { GetCommandInput, QueryCommandInput } from "@aws-sdk/lib-dynamodb";
import client, { baseClient, Response } from "../providers/dynamo";

type PartitionID = {
  table: string;
  pk: string;
};

type ItemID = {
  table: string;
  uid: string;
};

type Insertions = {
  table: string;
  item: {};
  /** @duplicate One copy per value in the item.
    Ex. {url: ":", tags: ["a", "b"]} -> 
          {pk: "a", url: ":", tags: "a,b"}
          {pk: "b", url: ":", tags: "a,b"} */
  duplicate: string;
  /** @getSortKey Called to generate the sort key.
   * Ex. `2020-04-26/js/153`
   *  - Sort by date, tag, id
   */
  getSortKey: (pk: string, data: any) => string;
};

const getFindArgs = (bucket: PartitionID): QueryCommandInput => ({
  KeyConditionExpression: "pk = :pk",
  ExpressionAttributeValues: {
    ":pk": bucket.pk,
  },
  TableName: bucket.table,
  ScanIndexForward: false,
});
export async function find(bucket: PartitionID): Promise<Response> {
  // const found = await client.query(getFindArgs(bucket));
  const found = await baseClient.send(
    new QueryCommand({
      KeyConditionExpression: "pk = :pk",
      ExpressionAttributeValues: {
        ":pk": { S: bucket.pk },
      },
      TableName: bucket.table,
      ScanIndexForward: false,
    })
  );
  console.log(`found ${found.Items}`);
  return found;
}

export async function dynamoGetItem(table: string, pk: string, sk: string) {
  const args: GetCommandInput = {
    TableName: table,
    Key: {
      pk,
      sk,
    },
  };
  const resp = await client.get(args);
  return resp;
}

/** Assume that items are duplicated on insertion
 *   and there are multiple items with the same UID.
 *   Assume there is a secondary index called uid-index
 *   and query it to get the pk/sk needed to delete the items.
 *  TODO: batch delete
 */
export async function deleteSome(item: ItemID): Promise<any> {
  const { table, uid } = item;

  // Find as usual, but with a secondary index.
  // Rename Items to items
  const args = getFindArgs({ table, pk: uid });
  const { Items: items } = await client.query({
    ...args,
    IndexName: "uid-index",
    KeyConditionExpression: "uid = :pk",
  });

  // Start deleting each item.
  return Promise.allSettled(
    items.map((item) => {
      const { pk, sk } = item;
      return client.delete({
        TableName: table,
        Key: {
          pk,
          sk,
        },
      });
    })
  );
}

/**
 * insertSome is intended for what would look like one item,
 * but put manually into multiple "buckets".
 *
 * Context: Using a single tag as a partition key for links means
 * we can easily look up links by tag. It's the primary use case here.
 * In the DynamoDB case, we want to save duplicate computation by
 * duplicating data instead. The result should be that when we look up
 * a tag, the data is already denormalized and sorted by date in storage.
 *
 */
export async function insertSome(insertions: Insertions): Promise<any> {
  const { table, item, duplicate: duplicationKey, getSortKey } = insertions;

  // Store the array as an attribute ["tag", "tag2"] -> "tag,tag2"
  const template = {
    ...item,
    [duplicationKey]: item[duplicationKey].join(","),
  };

  const operations = [];
  for (const pk of item[duplicationKey]) {
    const row = { ...template, pk, sk: getSortKey(pk, template) };
    operations.push(
      client.put({
        TableName: table,
        Item: row,
      })
    );
  }
  return Promise.allSettled(operations);
}
