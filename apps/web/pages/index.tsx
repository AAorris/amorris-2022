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
          <h2 className={styles.subHeaderStyle}>
            Full stack engineer at <span className={styles.zapier}>Zapier</span>
          </h2>
          <a href="https://linkedin.com/in/AAorris/">Connect on LinkedIn</a>
        </div>

        <div className={styles.heroIntro}>
          <h2>What&apos;s in your way?</h2>
          <p>
            There&apos;s something eating your time; draining energy; getting
            between you and your top priorities. Let&apos;s change that, and
            spend more time on what matters. What will it feel like when there
            is nothing left in your way?
          </p>
        </div>

        <div className={styles.heroIntro}>
          <h2>How can I help?</h2>
          <p>
            I build web apps, and as a full stack engineer I&apos;m well suited
            to accelerating new projects or being a maintainer of complex and
            mature infrastructure. I love to mentor new engineers and help debug
            and solve problems.
          </p>
        </div>

        <div className={styles.heroIntro}>
          <h2>What&apos;s here?</h2>
          <p>
            I have hundreds of <Link href="/links-tagged">Links</Link> I found
            interesting over the last few years on various (mostly tech) topics.
            You might find some of them interesting or useful. You can also find
            places to connect with me down below.
          </p>
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
