import { Novu } from "@novu/node";

const novu = new Novu(process.env.NOVU_API_KEY);

export async function POST(req) {

  await novu.trigger("food-available", {
    to: { subscriberId: "ngo1" },
    payload: {
      message: "New food donation available"
    }
  });

  return Response.json({ success: true });
}