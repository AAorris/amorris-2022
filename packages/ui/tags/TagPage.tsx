import classNames from "classnames";

import "ui/app.css";
import styles from "./TagPage.module.css";
import layoutStyles from "ui/home/Layout.module.css";
import { ago } from "ui/relativeTime";
import Nav from "ui/home/Nav";
import Image from "next/image";
import { useState } from "react";

const deletionClasses: Record<number, string> = {
  1: styles.linkDeleting,
  2: styles.linkDeleted,
};

function Link(props) {
  const { item } = props;
  const [deleted, setDeleted] = useState(0);
  return (
    <div
      className={classNames(styles.item, deletionClasses[deleted])}
      key={item.uid}
      data-uid={item.uid}
    >
      <a className={styles.body} href={item.url}>
        <span className={styles.uri}>{item.uri}</span>
        <span className={styles.context}>
          {new URL(item.url).host}
          <span className={styles.contextSpacer}> — </span>
          {ago(new Date(item.shared).getTime())} ago
        </span>
        <div className={styles.subtitle}>{item.subtitle}</div>
      </a>
      <div className={styles.tags}>
        {item.tags.split(/,/).map((tag: string) => {
          return (
            <a className={styles.tag} key={tag} href={tag}>
              {`#${tag}`}
            </a>
          );
        })}
      </div>
      <button
        className={classNames(
          styles.button,
          process.env.NEXT_PUBLIC_ADMIN === "local-dev"
            ? styles.show
            : styles.hide
        )}
        onClick={() => {
          setDeleted(1);
          fetch(`/api/links/${item.uid}`, {
            method: "DELETE",
            credentials: "include",
          }).then((r) => {
            if (!r.ok) {
              setDeleted(-1);
            }
            setDeleted(2);
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

const TagPage = (props: { links: Record<string, any>; next?: string }) => {
  return (
    <div>
      <div style={{ borderBottom: "1px solid rgba(0 0 0 / 3%)" }}>
        <Nav
          image={
            <Image alt="" src={"/me-sm.jpg"} width={40} height={40}></Image>
          }
        />
      </div>
      <div className={classNames(styles.list, layoutStyles.topLevel)}>
        {props.links.items.map((item: Record<string, string>) => {
          return <Link key={item.uid} item={item} />;
        })}
      </div>
    </div>
  );
};

export default TagPage;
