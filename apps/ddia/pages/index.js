import { NextSeo } from "next-seo";
import styles from "../styles/Home.module.css";
import Slides from "../chapters/ch7";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="DDIA CH7 Notes"
        description="Partitioning"
      />

      <main className={styles.main}>
        <Slides />
      </main>
    </div>
  );
}
