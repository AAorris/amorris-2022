import Head from "next/head";
import Header from "../components/header";
import layoutClass from "../components/ui/tailwind/layout";
import navClass from "../components/ui/tailwind/nav";
import textClass from "../components/ui/tailwind/text";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Aaron Morris</title>
        <meta name="description" content="Full stack engineer at Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={navClass()}>
        <div className={layoutClass()}>
          <Header />
        </div>
      </nav>
      <main className={layoutClass()}>
        <p className="pb-2">
          <mark>Under renovation for a bit.</mark>
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://links.amorris.ca"
              className="underline underline-offset-2"
            >
              My saved links
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://demo-knock-app-amorris.vercel.app/"
              className="underline underline-offset-2"
            >
              My test app for notifications
            </a>
          </li>
        </ul>
        <p>Now: Building a billiards visualization tool</p>
      </main>
    </div>
  );
}
