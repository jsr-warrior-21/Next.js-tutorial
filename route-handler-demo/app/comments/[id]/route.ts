import { comment } from "../data";

// dynamic get request

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const particularComment = comment.filter((comment) => {
    return comment.id === parseInt(id);
  });
  if (!particularComment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(particularComment);
}

// dynamic post request

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;
  const Index = comment.findIndex((c) => c.id === parseInt(id));
  comment[Index].text = text;
  return Response.json(comment[Index]);
}

// dynamic delete request

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const Index = comment.findIndex((c) => c.id === parseInt(id));
  comment.splice(Index, 1); //directly updates the comment array - no need to assign
  // splice(indexStarting,counting) - counting means starting index se kitne element delete krne hai
  return new Response("Deleted successfully", { status: 200 });
}
