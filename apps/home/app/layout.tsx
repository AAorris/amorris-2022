import { Familjen_Grotesk, Noto_Sans } from "@next/font/google";
// import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import "../styles/globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-familjen",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${styles.body} ${noto.variable} ${familjen.variable}`}>
        <header className={styles.header}>
          <div>
            <Link href="/" className={styles.brand}>
              Aaron Morris
            </Link>
          </div>
          <div></div>
          <div>
            <Link key="tw" href="https://twitter.com/aaorris" target="_blank">
              Twitter
            </Link>
            <Link
              key="li"
              href="https://linkedin.com/in/aaorris"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link key="gh" href="https://github.com/aaorris" target="_blank">
              Github
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
