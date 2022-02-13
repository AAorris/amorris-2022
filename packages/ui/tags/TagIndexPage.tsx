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
import Infrastructure from "../Infrastructure";

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
      <div className={layoutStyles.topLevel} style={{ marginTop: 50 }}>
        <h2>About these links</h2>
        <p>
          I started saving links in a flat file. Then it was an experiment in my
          information bias — Is my information consumption balanced? (no) — Now
          it&apos;s a litmus test for database technology. From static text to
          Sqlite to Airtable to DynamoDB, always in search of free-tier nirvana.
        </p>
        <h2>How it works</h2>
        <p>
          I had been sending Tweets to Airtable via Zapier. Lately I have been
          getting more familiar with DynamoDB, and the website is currently
          served via a copy of the data in DynamoDB and link entry is offline.
        </p>
        <div className={styles.infra}>
          <Infrastructure />
        </div>
      </div>
      <div className={classNames(styles.list, layoutStyles.topLevel)}>
        {(props.tags.items as any[])
          .sort((left, right) => {
            return -(left.count - right.count);
          })
          .map((item: any) => (
            <div className={styles.tagDetail}>
              <div className={styles.header}>
                <h2>
                  <Link
                    href={`/links-tagged/${item.sk}`}
                  >{`${item.name}`}</Link>
                </h2>
                <span className="badge"> {item.count} links</span>
              </div>
              <span className="updated">
                Updated {ago(new Date(item.lastUpdated).getTime())} ago
              </span>
            </div>
          ))}
      </div>
      <style jsx>{`
        .badge {
          background: #222;
          border-radius: 15px;
          color: #ccc;
          display: block;
          height: min-content;
          padding: 3px 10px;
          padding-bottom: 0;
          font-size: 14px;
          font-weight: 700;
          align-self: center;
        }
        .updated {
          padding-inline-start: 15px;
          color: #888;
        }
      `}</style>
    </div>
  );
};

export default TagPage;
