import Head from "next/head";
import { getLinksForTag } from "repositories/links";

type Link = {
  uri: string;
  uid: string;
  tags: string;
  subtitle: string;
  url: string;
};
type Links = Link[];
type Day = [string, Links];
type Days = Day[];
type DateTuple = [number, number, number];

export default function Home({ days }: { days: Days }) {
  return (
    <div className="p-4">
      <Head>
        <title>Links</title>
        <meta name="description" content="Links saved by Aaron" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {days.map(([day, links]) => (
        <div className="day" data-day={day} key={day}>
          {links.map((link) => (
            <div key={link.uid} className="flex gap-2 justify-between">
              <span className="left flex gap-2 overflow-hidden">
                <span className="w-[12ch] text-gray-400 hidden md:inline">
                  {day}
                </span>
                <a
                  href={link.url}
                  className="w-max inline-block shrink underline grow underline-offset-1 whitespace-nowrap"
                >
                  {link.uri}
                </a>
              </span>
              <span className="right hidden md:inline">
                <span>{new URL(link.url).host}</span>
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const [js, home, web, tech] = await Promise.all([
    getLinksForTag("amorris-links-03", "js"),
    getLinksForTag("amorris-links-03", "home"),
    getLinksForTag("amorris-links-03", "web"),
    getLinksForTag("amorris-links-03", "tech"),
  ]);
  const groups = {};
  for (const tag of [js, home, web, tech]) {
    for (const { uri, uid, tags, url, shared, subtitle } of (tag as any)
      .items) {
      if (!(shared in groups)) {
        groups[shared] = [];
      }
      if (groups[shared].filter((x) => x.uid === uid).length) continue;
      groups[shared].push({ uri, uid, tags, subtitle, url });
    }
  }
  const props = {
    days: Object.entries(groups).sort(
      (l, r) =>
        new Date(...(r[0].split(/-/).map(Number) as DateTuple)).getTime() -
        new Date(...(l[0].split(/-/).map(Number) as DateTuple)).getTime()
    ),
  };
  return { props };
}
