// import client from "./providers/dynamo";
import { find, deleteSome } from "./details/dynamoKeyValue";

// We create a secondary index "uid-index"
// with only-keys
export const deleteLink = async (table, uid) => {
  const result = await deleteSome({ table, uid });
  return result;
};

export const getLinksForTag = async (table, tag) => {
  const [items] = await find({ table, pk: tag });
  return { items };
};

export const getTags = async (table) => {
  const [items] = await find({ table, pk: "//tags" });
  return { items };
};
