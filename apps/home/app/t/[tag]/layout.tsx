// import { getTags } from "repositories/links";

export default function Layout({ params: _, children }) {
  // const { tag, name } = params;
  return <div>{children}</div>;
}

// export async function generateStaticParams() {
//   const tag = await getTags("amorris-links-03");

//   return tag.items.map((item) => ({
//     tag: item.sk,
//     name: item.name,
//   }));
// }
