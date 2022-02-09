import "ui/app.css";
import styles from "./TagPage.module.css";
import layoutStyles from "ui/home/Layout.module.css";
import Nav from "ui/home/Nav";
import Image from "next/image";

const TagPage = (props) => {
  return (
    <div className={layoutStyles.topLevel}>
      <div style={{ borderBottom: "1px solid rgba(0 0 0 / 3%)" }}>
        <Nav
          image={
            <Image alt="" src={"/me-sm.jpg"} width={40} height={40}></Image>
          }
        />
      </div>
      <div className={styles.list}>
        {props.links.items.map((item: Record<string, string>) => {
          return (
            <div
              className={styles.item}
              key={`${item.pk}/${item.sk}`}
              data-json={JSON.stringify(item)}
            >
              <a className={styles.body} href={item.url}>
                <span className={styles.uri}>{item.uri}</span>
                <span className={styles.context}>
                  {new URL(item.url).host}
                  <span className={styles.contextSpacer}> — </span>
                  {item.shared}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagPage;
