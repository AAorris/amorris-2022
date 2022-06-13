import Head from "next/head";

export default function Home() {
  return (
    <div className="p-4">
      <Head>
        <title>Aaron Morris</title>
        <meta name="description" content="Full stack engineer at Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          <mark>Under renovation for a bit.</mark>
        </p>
        <ul>
          <li>
            <a
              href="https://links.amorris.ca"
              className="underline underline-offset-2"
            >
              Links moved to links.amorris.ca
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
