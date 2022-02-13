import Head from "next/head";
import TagIndexPage from "ui/tags/TagIndexPage";

export async function getStaticProps() {
  return {
    props: {
      tags: await require("repositories/links").getTags("amorris-links-03"),
    },
    revalidate: 3600,
  };
}

const Page = (props) => (
  <>
    <Head>
      <title>Links</title>
    </Head>
    <TagIndexPage {...props} />
  </>
);

export default Page;
