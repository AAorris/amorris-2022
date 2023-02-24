import "server-only";
import Link from "next/link";
import { TagItem } from "repositories/links";
import styles from "./tag-component.module.css";

export default function Tag({ item }: { item: TagItem }) {
  // return <pre>{JSON.stringify(item)}</pre>;
  return (
    <div className={styles.tag}>
      <Link href={`/t/${item.sk}`}>{item.name}</Link>
    </div>
  );
}
