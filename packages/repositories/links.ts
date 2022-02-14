import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const baseClient = new DynamoDBClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: process.env.DDB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DDB_SECRET_ACCESS_KEY,
  },
});
const client = DynamoDBDocument.from(baseClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
  },
});

export const getLinksForTag = async (table, tag) => {
  const result = await client.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": tag,
    },
    TableName: table,
    ScanIndexForward: false,
  });
  return {
    items: result.Items,
  };
};

export const getTags = async (table) => {
  const result = await client.query({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "//tags",
    },
    TableName: table,
    ScanIndexForward: false,
  });
  return {
    items: result.Items,
  };
};
