import { getTags } from "repositories/links";
import Tag from "./t/tag-component";
import styles from "./page-tags.module.css";

export async function Tags({ limit }: { limit?: number }) {
  let start = Date.now();
  const data = await getTags("amorris-links-03");
  let end = Date.now();
  const sortedItems = data.items
    .sort((a, b) => b.count - a.count)
    .filter((tag) => tag.count > 6)
    .slice(0, limit ?? -1);
  return (
    <div
      data-items={data.items.length}
      data-duration={end - start}
      className={styles.tags}
    >
      {sortedItems.map((item) => (
        <Tag key={item.sk} item={item} />
      ))}
    </div>
  );
}
