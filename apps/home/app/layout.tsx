import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header style={{ marginBottom: 30, display: "flex", gap: 20 }}>
          <Link href="/">amorris.ca</Link>
          <Link href="/html5">html5</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
