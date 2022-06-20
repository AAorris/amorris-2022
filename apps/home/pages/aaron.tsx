import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import layout from "../components/ui/tailwind/layout";
import nav from "../components/ui/tailwind/nav";
import text from "../components/ui/tailwind/text";

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Aaron Morris</title>
        <meta name="description" content="Full stack engineer at Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={nav()}>
        <div className={layout()}>
          <Header />
        </div>
      </nav>
      <main className={layout()}>
        <p className={text({ slim: true }, "text-xl")}>
          Aaron Morris, in 🇨🇦 Canada, Full stack engineer at Vercel —&nbsp;
          <em className={text({ dim: true })}>
            I acknowledge my presence on the unceded territory of the first
            nations people, including the "Wendake-Nionwentsïo", "Mississauga",
            "Anishinabewaki ᐊᓂᔑᓈᐯᐗᑭ", and "Haudenosaunee".
          </em>
        </p>
        <div className="py-2"></div>
        <h2 className={(text(), "text-xl")}>Also known as</h2>
        <ul>
          <li>
            <Link href="https://github.com/aaorris">@AAorris@github.com</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/aaorris">
              @AAorris@linkedin.com
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/aaorris">@AAorris@twitter.com</Link>
            <ul>
              <li>
                <Link href="https://twitter.com/aaorris">
                  @morris_codes@twitter.com
                </Link>
                {" — "}
                <span className={text({ dim: true })}>
                  for higher frequency coding tweets
                </span>
              </li>
            </ul>
          </li>
          <li>
            <Link href="https://merveilles.town/AAorris">
              @AAorris@merveilles.town
            </Link>
            {" — "}
            <span className={text({ dim: true })}>on the fediverse</span>
          </li>
        </ul>
      </main>
      <style jsx>{`
        li {
          list-style-type: circle;
          margin-left: 2.5ch;
        }
      `}</style>
    </div>
  );
}
