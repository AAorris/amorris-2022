const aws = require("aws-sdk");
const {
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");

aws.config.update({
  credentials: {
    accessKeyId: process.env.DDB_ACCESS_KEY_ID,
    secretAccessKey: process.env.DDB_SECRET_ACCESS_KEY,
  },
});

const client = new DynamoDBClient({
  region: "us-west-2",
});

export const getLinksForTag = async (table, tag) => {
  // Try also: KeyConditionExpression: "pk = :pk and begins_with(sk, :q)",
  const command = new QueryCommand({
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": { S: tag },
    },
    TableName: table,
  });
  const result = await client.send(command);
  const items = result.Items.map((item) =>
    Object.fromEntries(
      Object.entries(item).map(([key, value]) => {
        return [key.trim(), value["S"]];
      })
    )
  );
  return { key: result.LastEvaluatedKey || null, items };
};

export const getLinks = async (table) => {
  const command = new ScanCommand({
    TableName: table,
  });
  const result = await client.send(command);
  const items = result.Items.map((item) =>
    Object.fromEntries(
      Object.entries(item).map(([key, value]) => {
        return [key.trim(), value["S"]];
      })
    )
  ).sort();
  return { key: result.LastEvaluatedKey || null, items };
};
