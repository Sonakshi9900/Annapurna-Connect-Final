import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { FoodDonation } from "@/models/FoodDonation";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get("authorization");
        const decoded = verifyToken(authHeader);

        if (!decoded || (decoded.role !== "ngo" && decoded.role !== "admin")) {
            return NextResponse.json({ error: "Unauthorized." }, { status: 403 });
        }

        await connectToDatabase();

        // In a real app with geospatial queries, you'd use `$near` operator.
        // For this MVP, we fetch all pending active donations that haven't expired.

        const now = new Date();

        // Auto-expire items that are past their date but still marked pending
        await FoodDonation.updateMany(
            { status: "pending", expiryTime: { $lt: now } },
            { $set: { status: "expired" } }
        );

        const donations = await FoodDonation.find({
            status: "pending",
            expiryTime: { $gt: now }
        })
            .populate("donorId", "name phone address")
            .sort({ createdAt: -1 });

        return NextResponse.json({
            donations,
        }, { status: 200 });
    } catch (error: unknown) {
        console.error("Fetch nearby donations error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
