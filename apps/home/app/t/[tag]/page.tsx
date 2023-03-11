import { Suspense } from "react";
import { LinksItems } from "./links-items";

export default async function Page({ params: { tag } }) {
  return (
    <div>
      <div className="fullWidth" style={{ marginBottom: 40 }}>
        <h1>Tag[{tag}]</h1>
        <p>
          This is a tag page. Click a link to see more details. The detail view
          includes other tags for a link, which can be used to explore connected
          tags.
        </p>
      </div>
      <Suspense>
        <div className="fullWidth">
          {/** @ts-ignore nextjs */}
          <LinksItems tag={tag} />
        </div>
      </Suspense>
    </div>
  );
}
