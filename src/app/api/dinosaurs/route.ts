import data from "./data.json" assert { type: "json" };

export async function GET() {
  return Response.json(data);
}