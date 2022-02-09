import Image from "next/image";
import Link from "next/link";

import Nav from "ui/home/Nav";
import Footer from "ui/home/Footer";

import 'ui/app.css';
import styles from './index.module.css';
import layoutStyles from 'ui/home/layout.module.css';
import avatar from "../public/me-sm.jpg";

export default function Web() {
  return (
    <div className={styles.app}>
      <Nav image={
        <Image src={avatar}></Image>
      } />
      <section className={layoutStyles.topLevel}>
        <h1 className={styles.headerStyle}>I&apos;m Aaron Morris</h1>
        <h2 className={styles.subHeaderStyle}>Full stack engineer at Zapier</h2>
        
        <h3>My mission is to <b>save people time</b> at scale.</h3>
        <p>I have a wife and son (they&apos;re awesome)
          and the time I spend with them is my most precious.
        <br />Software is the superpower that slays busywork and unlocks
        time for what matters.
        </p>
        
        <h3>How can we work together?</h3>
        <p>
        If you are a parent, entrepreneur, engineer, founder, Let&apos;s connect.
        <br />If you&apos;re starting down the path into engineering, feel free to reach out for
        some free mentorship time.
        <br />Just seeing who I am? Maybe get a glimpse into my brain by browsing my <Link href="/links">links</Link>
        </p>

      </section>
      <div style={{height: 70}} />
      <div className={styles.preFooter}>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: 20}}>
          <h2 className={styles.subHeaderStyle} style={{color: "white"}}>Connect</h2>
          <a className={styles.cta} href="https://twitter.com/AAorris">Follow me on Twitter</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
