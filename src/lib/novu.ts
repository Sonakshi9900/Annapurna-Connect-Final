import { Novu } from '@novu/node';
import { Notification } from '@/models/Notification';
import connectToDatabase from './mongodb';

const novu = new Novu(process.env.NOVU_API_KEY || 'development_mock_key');

// In a real application, you would create workflows in your Novu dashboard
// and map them to these trigger names.
const WORKFLOWS = {
    NEW_DONATION: 'new-donation-alert',
    DONATION_ACCEPTED: 'donation-accepted',
    DONATION_EXPIRING: 'donation-expiring',
};

export async function sendNotification({
    userId,
    userEmail,
    workflowId,
    payload,
    message,
    type = 'info'
}: {
    userId: string;
    userEmail?: string;
    workflowId: string;
    payload: Record<string, any>;
    message: string;
    type?: "alert" | "info" | "success" | "warning";
}) {
    try {
        // 1. Send via Novu (Email/Push/SMS depending on workflow configuration)
        if (process.env.NOVU_API_KEY) {
            await novu.trigger(workflowId, {
                to: {
                    subscriberId: userId,
                    email: userEmail,
                },
                payload,
            });
        } else {
            console.log(`[Novu Mock] Triggered ${workflowId} to ${userId} with payload:`, payload);
        }

        // 2. Save to our local MongoDB database for in-app notification history
        await connectToDatabase();
        await Notification.create({
            userId,
            message,
            type,
        });

        return true;
    } catch (error) {
        console.error("Notification Service Error:", error);
        return false;
    }
}
