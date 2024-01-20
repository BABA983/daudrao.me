import { cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  return new Response("Hello, I'm Daud 👋", {
    status: 200,
  });
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const slug = params.slug;
  return Response.json({ request, cookieStore });
}
