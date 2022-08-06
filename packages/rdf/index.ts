import memdown from "memdown";
import { DataFactory } from "rdf-data-factory";
import { Quadstore } from "quadstore";
import { Engine } from "quadstore-comunica";

// Any implementation of AbstractLevelDOWN can be used.
// For server-side persistence, use `leveldown` or `rocksdb`.
const backend = memdown();

// Implementation of the RDF/JS DataFactory interface
const df = new DataFactory();

// Store and query engine are separate modules
const store = new Quadstore({ backend, dataFactory: df });
const engine = new Engine(store);

export const open = () => store.open();

export const put = () =>
  store.put(
    df.quad(
      df.namedNode("http://rdf.morris.codes/literal/amorris.ca"),
      df.namedNode("http://rdf.morris.codes/has/canonical-author"),
      df.namedNode("http://rdf.morris.codes/canonical/aaron"),
      df.defaultGraph()
    )
  );

// Retrieves all quads using Quadstore's API
export const allQuads = async () => {
  const { items } = await store.get({});
  return items;
};

// Retrieves all quads using RDF/JS Stream interfaces
export const getStream = async () => {
  const quadsStream = store.match(undefined, undefined, undefined, undefined);
  return quadsStream;
};

// Queries the store via RDF/JS Query interfaces
export const runQuery = async () => {
  const query = await engine.query("SELECT * {?s ?p ?o}");
  const bindingsStream = await query.execute();
  return bindingsStream as any;
};

export default async function main() {
  await store.open();
  await put();
  const quads = await allQuads();
  console.log(quads);
}

// main();
