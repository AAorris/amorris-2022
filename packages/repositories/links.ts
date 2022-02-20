import client from "./providers/dynamo";

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
