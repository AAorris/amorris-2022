import Image from "next/image";
import Link from "next/link";

import Nav from "ui/home/Nav";
import Footer from "ui/home/Footer";

import "ui/app.css";
import styles from "./index.module.css";
import layoutStyles from "ui/home/Layout.module.css";
import avatar from "../public/me-sm.jpg";
import hero from "../public/me-lg.jpg";

export default function Web() {
  return (
    <div className={styles.app}>
      <Nav image={<Image alt="" src={avatar} />} />
      <div className={styles.heroImage}>
        <Image alt="Picture of me" src={hero} placeholder="blur" />
      </div>
      <section className={layoutStyles.topLevel}>
        <h1 className={styles.headerStyle}>I&apos;m Aaron Morris</h1>
        <h2 className={styles.subHeaderStyle}>Full stack engineer at Zapier</h2>
        <a href="https://linkedin.com/in/AAorris/">Connect on LinkedIn</a>

        <h3>
          My mission is to <b>save people time for what matters</b> at scale.
        </h3>

        <h3>How can we work together?</h3>
        <p>
          If you are a parent, entrepreneur, engineer, founder, Let&apos;s
          connect. If you&apos;re starting down the path into engineering, feel
          free to reach out for some free mentorship time. Just browsing? Maybe
          get a glimpse into my brain by browsing my{" "}
          <Link href="/links">links</Link>
        </p>
      </section>
      <div style={{ height: 70 }} />
      <div className={styles.preFooter}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h2 className={styles.subHeaderStyle} style={{ color: "white" }}>
            Connect
          </h2>
          <a className={styles.cta} href="https://twitter.com/AAorris">
            Follow me on Twitter
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
