// import client from "./providers/dynamo";
import { ulid } from "ulid";
import { insertSome, find, deleteSome } from "./details/dynamoKeyValue";

interface CreateLinkArgs {
  uri: string;
  subtitle: string;
  url: string;
  tags: string[];
  shared?: string; // Date; ex. 2022-02-04
  type?: string;
}

interface CreateLink {
  tags: string[];
  uri: string;
  subtitle: string;
  url: string;
  uid: string; // Ex. 411 or a ULID
  shared: string; // Date; ex. 2022-02-04
  type?: string;
}

export const createLink = async (table, args: CreateLinkArgs) => {
  const item: CreateLink = {
    ...args,
    uid: ulid(),
    shared: args.shared || new Date().toISOString().split("T")[0],
  };
  const linkInsertion = insertSome({
    table,
    item,
    duplicate: "tags",
    getSortKey(tag, data: CreateLink) {
      return `${data.shared}/${tag}/${data.uid}`;
    },
  });
  return Promise.allSettled([linkInsertion]);
};

// We create a secondary index "uid-index"
// with only-keys and delete links by UID
// There are multiple — One link per tag.
export const deleteLink = async (table, uid): Promise<any> => {
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
