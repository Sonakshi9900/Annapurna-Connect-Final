import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { FoodDonation } from "@/models/FoodDonation";
import { NGORequest } from "@/models/NGORequest";
import { verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const decoded = verifyToken(authHeader);

        if (!decoded) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { donationId, status } = await req.json();

        if (!donationId || !status) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const validStatuses = ["pending", "accepted", "completed", "expired"];
        if (!validStatuses.includes(status)) {
            return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
        }

        await connectToDatabase();

        const donation = await FoodDonation.findById(donationId);

        if (!donation) {
            return NextResponse.json({ error: "Donation not found" }, { status: 404 });
        }

        donation.status = status;
        await donation.save();

        if (status === "completed") {
            await NGORequest.updateMany(
                { donationId, status: "accepted" },
                { $set: { status: "completed" } }
            );
        }

        return NextResponse.json({
            message: `Donation status updated to ${status}`,
        }, { status: 200 });
    } catch (error: unknown) {
        console.error("Status update error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
