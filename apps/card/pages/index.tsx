import Head from "next/head";

export default function Home() {
  return (
    <div className="p-4 grid place-items-center h-[100vh">
      <Head>
        <title>Aaron Morris</title>
        <meta name="description" content="Full stack engineer at Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-gray-600 border-solid border-2 p-4 rounded">
        <h1>Aaron Morris</h1>
        <p className="text-gray-500 m-0 p-0">Software engineer at Vercel</p>
        <p className="pb-2">
          <mark>Under renovation for a bit.</mark>
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://links.amorris.ca"
              className="underline underline-offset-2"
            >
              My saved links
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://demo-knock-app-amorris.vercel.app/"
              className="underline underline-offset-2"
            >
              My test app for notifications
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
