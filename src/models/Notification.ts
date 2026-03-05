import mongoose, { Schema, Document } from "mongoose";

export interface INotification extends Document {
    userId: mongoose.Types.ObjectId;
    message: string;
    type: "alert" | "info" | "success" | "warning";
    read: boolean;
    createdAt: Date;
}

const NotificationSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        message: { type: String, required: true },
        type: { type: String, enum: ["alert", "info", "success", "warning"], default: "info" },
        read: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const Notification = mongoose.models.Notification || mongoose.model<INotification>("Notification", NotificationSchema);
