// import { getTags } from "repositories/links";
// import { Tags } from "../page-tags";
//
export default function Layout({ params: _, children }) {
  // const { tag, name } = params;
  return (
    <div>
      <div className="fullWidth" style={{ marginBottom: 30 }}>
        {/* <Tags limit={10} /> */}
      </div>
      {children}
    </div>
  );
}
