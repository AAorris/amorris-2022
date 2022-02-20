import Image from "next/image";

import "ui/app.css";
import "../app.css";
import type { AppProps } from "next/app";

import Nav from "ui/home/Nav";
import Footer from "ui/home/Footer";
import avatar from "../../web/public/me-sm.jpg";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ background: "black" }}>
        <Nav image={<Image alt="" src={avatar} />} />
      </div>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
