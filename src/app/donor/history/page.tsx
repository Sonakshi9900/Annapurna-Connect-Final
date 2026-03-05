"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { format } from "date-fns";
import { CheckCircle2, MapPin } from "lucide-react";

const pastDonations = [
    {
        id: "DON-001",
        title: "Leftover Party Buffet",
        quantity: "20 kg",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
        ngo: "City Hope Foundation",
        status: "Delivered",
    },
    {
        id: "DON-002",
        title: "100 Loaves of Bread",
        quantity: "15 kg",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
        ngo: "Bread for All",
        status: "Delivered",
    },
    {
        id: "DON-003",
        title: "Vegetable Stew & Rice",
        quantity: "30 kg",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14), // 14 days ago
        ngo: "Helping Hands",
        status: "Delivered",
    }
];

export default function DonorHistoryPage() {
    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Donation History</h1>
                <p className="text-slate-500">Thank you for your continued support. Here is a log of your past contributions.</p>
            </div>

            <div className="space-y-4">
                {pastDonations.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-soft transition-shadow duration-200">
                        <CardContent className="p-0 sm:flex items-center">
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:w-1/4 sm:border-r border-b sm:border-b-0 border-slate-100 dark:border-slate-800 flex flex-col justify-center">
                                <span className="text-sm font-medium text-slate-500 flex items-center gap-1 mb-1">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                    {item.status}
                                </span>
                                <span className="font-semibold text-slate-900 dark:text-slate-100">
                                    {format(item.date, "MMM dd, yyyy")}
                                </span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{item.title}</h3>
                                    <div className="flex items-center text-sm text-slate-500 gap-4">
                                        <span>{item.quantity}</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            Picked up by {item.ngo}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <span className="text-slate-400">ID: {item.id}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
