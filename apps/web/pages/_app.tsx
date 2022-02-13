import App from "next/app";
import PageProgressBar from "ui/PageProgressBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageProgressBar
        color="#333"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
