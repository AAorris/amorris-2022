import clsx from "clsx";
import Link from "next/link";
import aria from "../styles/aria.module.css";
import core from "../styles/core.module.css";
import styles from "../styles/homepage.module.css";

export default function Home() {
  return (
    <main className={clsx(core.page, aria.page, styles.container, styles.main)}>
      <h1 className="sub">Aaron Morris</h1>
      <sub>Husband, father, 29 — Software engineer at Vercel</sub>
      <ul className={styles.linkList}>
        {[
          <Link key="tw" href="https://twitter.com/aaorris">
            twitter.com@AAorris
          </Link>,
          <Link key="li" href="https://linkedin.com/in/aaorris">
            linkedin.com@AAorris
          </Link>,
          <Link key="gh" href="https://github.com/aaorris">
            github.com@AAorris
          </Link>,
          <Link key="lk" href="https://links.morris.codes/">
            #bookmarks
          </Link>,
        ].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
