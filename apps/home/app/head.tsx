import { Source_Code_Pro } from "@next/font/google";
const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Head() {
  return (
    <>
      <title>Aaron Morris</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="json" href="/json/index.json" />
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
    </>
  );
}
