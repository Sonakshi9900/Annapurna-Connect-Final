import { Novu } from "@novu/node";

export async function POST(req) {
  // This securely grabs your key from Render
  const novu = new Novu(process.env.NOVU_SECRET_KEY);

  try {
    await novu.trigger("food-available", {
      to: { subscriberId: "ngo1" },
      payload: {
        message: "New food donation available"
      }
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Novu Error:", error);
    return Response.json({ success: false, error: "Failed to send notification" }, { status: 500 });
  }
}
