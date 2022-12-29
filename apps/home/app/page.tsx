import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import buddy from "../public/2022/forest.jpeg";
import winterSnow from "../public/2022/winter-snow.jpeg";
import workspace from "../public/2022/workspace.jpeg";
import portrait from "../public/portrait.jpg";
import aria from "../styles/aria.module.css";
import core from "../styles/core.module.css";
import styles from "../styles/homepage.module.css";

const imageWidth = 400;
const imageHeight = 350;

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
      <div className={styles.gallery}>
        <Image
          placeholder="blur"
          src={portrait}
          alt="Picture of me"
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "cover" }}
        />
        <Image
          placeholder="blur"
          src={workspace}
          alt="Picture of my workspace"
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "cover" }}
        />
        <Image
          placeholder="blur"
          src={winterSnow}
          alt="Winter snow this year"
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "cover" }}
        />
        <Image
          placeholder="blur"
          src={buddy}
          alt="My son Forest"
          width={imageWidth}
          height={imageHeight}
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
}
