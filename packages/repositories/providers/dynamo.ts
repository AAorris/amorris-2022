import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const baseClient = new DynamoDBClient({
  region: "us-west-2",
  credentials: {
    accessKeyId: process.env.DDB_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.DDB_SECRET_ACCESS_KEY || "",
  },
});

// @ts-ignore
const client = DynamoDBDocument.from(baseClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
  },
});

export default client;
