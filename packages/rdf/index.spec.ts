import { open, put, allQuads } from ".";
test("db", async () => {
  // expect(add(1, 2)).toBe(3);
  await open();
  await put();
  expect(await allQuads()).toMatchInlineSnapshot(`
    Array [
      Quad {
        "graph": DefaultGraph {
          "termType": "DefaultGraph",
          "value": "",
        },
        "object": NamedNode {
          "termType": "NamedNode",
          "value": "http://example.com/object",
        },
        "predicate": NamedNode {
          "termType": "NamedNode",
          "value": "http://example.com/predicate",
        },
        "subject": NamedNode {
          "termType": "NamedNode",
          "value": "http://example.com/subject",
        },
        "termType": "Quad",
        "value": "",
      },
    ]
  `);
});
