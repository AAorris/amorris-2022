import fs from "fs";
import csv from "csv-parser";
import { DynamoDB } from "@aws-sdk/client-dynamodb"; // ES6 import
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"; // ES6 import

const baseClient = new DynamoDB({ region: "us-west-2" });
const client = DynamoDBDocument.from(baseClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
  },
});

// pk,sk
// "ar","2020-7-11/ar/388"
fs.createReadStream("/Users/a/morris-turbo/data/links-2022-02-08.csv")
  .pipe(csv())
  .on("data", async (data) => {
    for (const tag of data.tags.split(/,/)) {
      // one copy for each tag
      const sk = `${data.shared}/${tag}/${data.uid}`;
      const result = await client.put({
        TableName: "amorris-links-01",
        Item: {
          pk: tag,
          sk: sk,
          ...data,
        },
      });
    }
  });
