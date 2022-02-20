// Links API
import type { NextApiRequest, NextApiResponse } from "next";
import { createLink } from "repositories/links";

function require<T>(value: T): T {
  if (value === undefined) throw new Error("Missing required field");
  return value;
}

async function doPutLink(req: NextApiRequest) {
  const args = {
    url: require<string>(req.body.url),
    uri: require<string>(req.body.uri),
    tags: require<string[]>(req.body.tags),
    subtitle: require<string>(req.body.subtitle),
  };
  return await createLink("amorris-links-03", args);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    /** TODO: API auth package */
    req.method === "PUT" &&
    process.env.API_SESSION_KEY &&
    (req.cookies.sessionKey === process.env.API_SESSION_KEY ||
      req.headers.authorization === `token ${process.env.API_SESSION_KEY}`)
  ) {
    try {
      await doPutLink(req);
      res.status(200).send("OK");
    } catch (e) {
      res.status(400).send(e.message);
    }
  } else {
    const msg = "Method must be delete and authorization token must be valid";
    res.status(400).send(msg);
  }
}
