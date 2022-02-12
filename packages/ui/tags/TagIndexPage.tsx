import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

import "ui/app.css";
import Nav from "ui/home/Nav";
import { ago } from "../relativeTime";

// @ts-ignore
import styles from "./TagPage.module.css";
// @ts-ignore
import layoutStyles from "ui/home/Layout.module.css";

const TagPage = (props: { tags: any }) => {
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
        {(props.tags.items as any[])
          .sort((left, right) => {
            return -(left.count - right.count);
          })
          .map((item: any) => (
            <div>
              <Link href={`/links-tagged/${item.sk}`}>{`${item.name}`}</Link>
              <span className="badge"> {item.count} links</span>
              <span className="updated">
                {" "}
                — Last updated {ago(new Date(item.lastUpdated).getTime())} ago
              </span>
            </div>
          ))}
      </div>
      <style jsx>{`
        .badge {
          background: #eee;
          border-radius: 15px;
          color: #444;
          display: inline-block;
          padding: 3px 10px;
          padding-bottom: 0;
          font-size: 12px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default TagPage;
