import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { FoodDonation } from "@/models/FoodDonation";
import { verifyToken } from "@/lib/auth";
import { sendNotification } from "@/lib/novu";

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const decoded = verifyToken(authHeader);

        if (!decoded || decoded.role !== "donor") {
            return NextResponse.json({ error: "Unauthorized. Only donors can create donations." }, { status: 403 });
        }

        const { foodName, foodType, quantity, expiryTime, pickupLocation, description, imageUrl } = await req.json();

        if (!foodName || !foodType || !quantity || !expiryTime || !pickupLocation) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        await connectToDatabase();

        const newDonation = await FoodDonation.create({
            donorId: decoded.userId,
            foodName,
            foodType,
            quantity,
            expiryTime: new Date(expiryTime),
            pickupLocation,
            description,
            imageUrl,
            status: "pending",
        });

        // Notify NGOs that a new donation in the area is available
        // In a real app we would map this to nearby NGO user IDs
        await sendNotification({
            userId: "system_ngo_broadcast",
            workflowId: "new-donation-alert",
            payload: { foodName, quantity, location: pickupLocation },
            message: `New donation available: ${quantity} of ${foodName} at ${pickupLocation}`,
            type: "alert"
        });

        return NextResponse.json({
            message: "Donation listed successfully",
            donation: newDonation,
        }, { status: 201 });
    } catch (error: unknown) {
        console.error("Create donation error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
