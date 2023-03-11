import { Suspense } from "react";
import { LinkDetail } from "./link-detail";

export default async function Page({ params: { tag, link } }) {
  const uri = decodeURIComponent(link);
  return (
    <div>
      <Suspense>
        <div className="fullWidth">
          {/** @ts-ignore nextjs */}
          <LinkDetail tag={tag} link={uri} />
        </div>
      </Suspense>
    </div>
  );
}
