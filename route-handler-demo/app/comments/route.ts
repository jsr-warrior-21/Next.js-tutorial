import { type NextRequest } from "next/server";
import { comment } from "./data";

// export async function GET() {
//   return Response.json(comment);
// }

// here the request means which we are passing from json during post request./

export async function POST(request: Request) {
  const comments = await request.json();
  const newComment = {
    id: comment.length + 1,
    text: comments.text,
  };
  comment.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

// Object  →  JSON.stringify()  →  String  →  Sent over network
// String  →  JSON.parse()      →  Object  →  Used in code

// Headers are metadata sent along with a response — they tell the browser/client information about the response, not the response itself.
// typescriptheaders: { "Content-Type": "application/json" }
// Content-Type: application/json specifically tells the client:
// "Hey, the data I'm sending you is JSON format, parse it accordingly."

// handling query params

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comment.filter((c) => c.text.includes(query))
    : comment;
  return Response.json(filteredComments);
}
