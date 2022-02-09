import { getLinksForTag } from "repositories/links";
import TagPage from "ui/tags/TagPage";

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export async function getStaticProps({ params }) {
  return {
    props: {
      links: await getLinksForTag("amorris-links-01", params.tag),
    },
    revalidate: 3600,
  };
}

export default TagPage;
