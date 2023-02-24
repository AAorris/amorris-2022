import "server-only";
import { getLinksForTag } from "repositories/links";
import styles from "./links-items.module.css";

export async function LinksItems({ tag }: { tag: string }) {
  const resp = await getLinksForTag("amorris-links-03", tag);
  return (
    <div className={styles.items}>
      {resp.items.map((item) => (
        <div key={item.sk}>
          <a href={`/t/${tag}/l/${encodeURIComponent(item.sk)}`}>
            {item.uri} — {item.subtitle}
          </a>
        </div>
      ))}
    </div>
  );
}
