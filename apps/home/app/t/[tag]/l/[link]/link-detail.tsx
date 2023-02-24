import Link from "next/link";
import { dynamoGetItem } from "repositories/details/dynamoKeyValue";
import { getLinksForTag } from "repositories/links";

const table = "amorris-links-03";

export async function LinkDetail({ tag, link }: { tag: string; link: string }) {
  const resp = await dynamoGetItem(table, tag, link);
  const item = resp.Item;
  if (!item) {
    return (
      <div>
        Item could not be found: ({table} {tag} {link})
        <pre>{JSON.stringify(resp)}</pre>
      </div>
    );
  }
  // console.log(resp)
  // return <pre>{JSON.stringify(resp, null, 2)}</pre>;
  const tags = item.tags
    .split(/,/)
    .map((s) => <Link key={s} href={`/t/${s}`}>{`#${s}`}</Link>);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        fontSize: "120%",
      }}
    >
      <p style={{ fontSize: "150%" }}>{item.uri}</p>
      <sub>
        {`(${item.shared}) `}
        <span style={{ display: "inline-flex", gap: 10 }}>{tags}</span>
      </sub>
      <p>{item.subtitle}</p>
      <a
        href={item.url}
        target="_blank"
        style={{ width: "max-content" }}
        rel="noreferrer"
      >
        {item.url}
      </a>
    </div>
  );
}
