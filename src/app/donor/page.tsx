"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock, Utensils, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

// Mock Data
const activeDonations = [
    {
        id: "DON-1",
        title: "50 Boxes of Pastries",
        status: "Looking for NGO",
        NGO: null,
        expiry: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
    },
    {
        id: "DON-2",
        title: "Rice & Curry Buffet Leftovers",
        status: "Accepted",
        NGO: "Helping Hands Org",
        expiry: new Date(Date.now() + 1000 * 60 * 60 * 1.5), // 1.5 hours from now
    }
];

export default function DonorDashboard() {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                    <p className="text-slate-500">Welcome back! Here&apos;s what&apos;s happening today.</p>
                </div>
                <Button asChild>
                    <Link href="/donor/add">
                        <Utensils className="mr-2 h-4 w-4" />
                        New Donation
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Donations</CardTitle>
                        <Clock className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-slate-500">Currently awaiting pickup</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Rescued</CardTitle>
                        <Utensils className="h-4 w-4 text-emerald-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145 kg</div>
                        <p className="text-xs text-slate-500">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Impact</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">480</div>
                        <p className="text-xs text-slate-500">Estimated meals provided</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold tracking-tight">Active Donations</h2>
                    <Link href="/donor/active" className="text-sm text-primary hover:underline flex items-center">
                        View all <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {activeDonations.map((donation) => (
                        <Card key={donation.id} className="overflow-hidden">
                            <div className={`h-1.5 w-full ${donation.status === 'Accepted' ? 'bg-orange-500' : 'bg-primary'}`}></div>
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg">{donation.title}</CardTitle>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${donation.status === 'Accepted' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        }`}>
                                        {donation.status}
                                    </span>
                                </div>
                                <CardDescription>ID: {donation.id}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>NGO Partner:</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-100">{donation.NGO || "Finding partner..."}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600 dark:text-slate-400">
                                        <span>Expires in:</span>
                                        <span className="font-medium text-red-500">{formatDistanceToNow(donation.expiry)}</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border flex justify-end">
                                    <Button variant="outline" size="sm">View Details</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
