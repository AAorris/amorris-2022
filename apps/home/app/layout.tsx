import { Source_Code_Pro } from "@next/font/google";
import Link from "next/link";
import "../styles/globals.css";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body style={{ fontFamily: font.style.fontFamily }}>
        <header style={{ marginBottom: 30, display: "flex", gap: 20 }}>
          <Link href="/">amorris.ca</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
