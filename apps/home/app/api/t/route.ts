import { NextResponse } from "next/server";
import { getTags } from "repositories/links";

export async function GET() {
  const tags = await getTags("amorris-links-03");
  return NextResponse.json({ tags });
}
