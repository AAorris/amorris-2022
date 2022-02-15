import Head from "next/head";
import TagIndexPage from "ui/tags/TagIndexPage";
import NativeIcons from "ui/home/NativeIcons";

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
      <NativeIcons />
    </Head>
    <TagIndexPage {...props} />
  </>
);

export default Page;
