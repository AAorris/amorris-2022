import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Nav from "ui/home/Nav";
import Footer from "ui/home/Footer";

import "ui/app.css";
import NativeIcons from "ui/home/NativeIcons";
import styles from "./index.module.css";
import layoutStyles from "ui/home/Layout.module.css";
import avatar from "../public/me-sm.jpg";
import hero from "../public/me-lg.jpg";

export default function Web() {
  return (
    <div className={styles.app}>
      <Nav image={<Image alt="" src={avatar} />} />
      <Head>
        <title>Aaron Morris</title>
        <NativeIcons />
      </Head>
      <div className={styles.heroImage}>
        <Image alt="Picture of me" src={hero} placeholder="blur" />
      </div>
      <section className={layoutStyles.topLevel}>
        <div className={styles.heroIntro}>
          <h1 className={styles.headerStyle}>Aaron Morris</h1>
          <h2>Starting something new</h2>
        </div>
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
