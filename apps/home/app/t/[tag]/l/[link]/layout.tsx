export default function Layout({ params, children }) {
  const { tag: _, link: __ } = params;
  return <div>{children}</div>;
}
