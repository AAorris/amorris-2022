import Head from "next/head";
import TagPage from "ui/tags/TagPage";
import NativeIcons from "ui/home/NativeIcons";

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export async function getStaticProps({ params }) {
  return {
    props: {
      links: await require("repositories/links").getLinksForTag(
        "amorris-links-03",
        params.tag
      ),
      tag: params.tag,
    },
    revalidate: 3600,
  };
}

const Page = (props) => (
  <>
    <Head>
      <title>#{props.tag} links | amorris.ca</title>
      <NativeIcons />
    </Head>
    <TagPage {...props} />
  </>
);

export default Page;
