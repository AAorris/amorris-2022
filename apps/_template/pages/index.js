import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Aaron Morris"
        description="Software engineer at Vercel"
        canonical="https://www.amorris.ca"
        twitter={{
          handle: "@aaorris",
          site: "https://www.amorris.ca",
          cardType: "summary_large_image",
        }}
      />

      <main className={styles.main}>
        <p>
          <Image
            src="/avatar.jpg"
            width={32}
            height={32}
            className={styles.avatar}
          />{" "}
          <Link href="/">Morris</Link> <code>codes</code>
        </p>
        <div className={styles.blank} />
        <p>Nothing going on here right now!</p>
        <p>
          Follow me on Twitter
          <Link href="https://twitter.com/aaorris">@AAorris</Link>
        </p>
        <div className={styles.blank} />
        <p>Aaron Morris, 2022</p>
      </main>
    </div>
  );
}
