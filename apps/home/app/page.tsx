import { Suspense } from "react";
import { Tags } from "./page-tags";

export const fetchCache = "only-no-store";

export default async function Home() {
  return (
    <main>
      <div className="fullWidth" style={{ marginBottom: 40 }}>
        <h1>Home</h1>
        <p>
          This is my web space. For now, it is a scrappy store of bookmarks.
        </p>
      </div>
      <Suspense fallback={<p>...</p>}>
        <div className="fullWidth">
          {/** @ts-ignore nextjs */}
          <Tags />
        </div>
      </Suspense>
    </main>
  );
}
