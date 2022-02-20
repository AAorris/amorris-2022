import client from "../providers/dynamo";

type PartitionID = {
  table: string;
  pk: string;
};

type ItemID = {
  table: string;
  uid: string;
};

const getFindArgs = (bucket: PartitionID) => ({
  KeyConditionExpression: "pk = :pk",
  ExpressionAttributeValues: {
    ":pk": bucket.pk,
  },
  TableName: bucket.table,
  ScanIndexForward: false,
});
export async function find(bucket: PartitionID) {
  const result = await client.query(getFindArgs(bucket));
  return [result.Items, result];
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
