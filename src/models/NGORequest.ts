import mongoose, { Schema, Document } from "mongoose";

export interface INGORequest extends Document {
    donationId: mongoose.Types.ObjectId;
    ngoId: mongoose.Types.ObjectId;
    status: "pending" | "accepted" | "rejected" | "completed";
    pickupTime?: Date;
    createdAt: Date;
}

const NGORequestSchema = new Schema(
    {
        donationId: { type: Schema.Types.ObjectId, ref: "FoodDonation", required: true },
        ngoId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        status: { type: String, enum: ["pending", "accepted", "rejected", "completed"], default: "pending" },
        pickupTime: { type: Date },
    },
    { timestamps: true }
);

export const NGORequest = mongoose.models.NGORequest || mongoose.model<INGORequest>("NGORequest", NGORequestSchema);
