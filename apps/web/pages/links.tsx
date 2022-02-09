import { getLinks } from "repositories/links";
import TagPage from "ui/tags/TagPage";

export async function getStaticProps({ params }) {
  return {
    props: {
      links: await getLinks("amorris-links-01")
    },
    revalidate: 3600
  };
}

export default TagPage;
