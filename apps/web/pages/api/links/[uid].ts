import type { NextApiRequest, NextApiResponse } from "next";
import { deleteLink } from "repositories/links";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    /** TODO: API auth package */
    req.method === "DELETE" &&
    process.env.API_SESSION_KEY &&
    req.cookies.sessionKey === process.env.API_SESSION_KEY
  ) {
    await deleteLink("amorris-links-03", req.query.uid);
    res.status(200).send("OK");
  } else {
    res
      .status(400)
      .send("Method must be delete and authorization token must be valid");
  }
}
