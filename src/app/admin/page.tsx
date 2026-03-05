"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Users, Utensils, Building, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Platform Analytics</h1>
                <p className="text-slate-500">Monitor overall impact and system health across the region.</p>
            </div>

            {/* Top Metrics */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Utensils className="h-5 w-5 text-primary" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                18%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-500 text-sm font-medium">Total Food Rescued</h3>
                            <div className="text-3xl font-bold">12,450 kg</div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                5%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-500 text-sm font-medium">Active NGOs</h3>
                            <div className="text-3xl font-bold">142</div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                                <Users className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-full">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                24%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-500 text-sm font-medium">Active Donors</h3>
                            <div className="text-3xl font-bold">856</div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                <Activity className="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <span className="flex items-center text-sm font-medium text-red-500 bg-red-50 dark:bg-red-950/30 px-2 py-1 rounded-full">
                                <ArrowDownRight className="h-3 w-3 mr-1" />
                                2%
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-slate-500 text-sm font-medium">Expired Listings</h3>
                            <div className="text-3xl font-bold">24</div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Mock Chart Area */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Rescue Volume (30 Days)</CardTitle>
                        <CardDescription>Daily total weight of food rescued.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-end justify-between px-2 gap-2 border-b border-border pt-4">
                            {/* Simple mock bar chart */}
                            {[40, 55, 30, 80, 60, 45, 90, 100, 75, 40, 60, 85].map((h, i) => (
                                <div key={i} className="w-full bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-2">
                            <span>1st</span>
                            <span>15th</span>
                            <span>30th</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity Feed */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Live Activity Stream</CardTitle>
                        <CardDescription>Real-time updates from donors and NGOs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { time: "2m ago", text: "Helping Hands NGO accepted 15kg from Green Market" },
                                { time: "15m ago", text: "New Donor Registered: Downtown Bakery" },
                                { time: "45m ago", text: "Donation Expired: 5kg Pasta (ID: DON-089)" },
                                { time: "1h ago", text: "Food Bank Central picked up 50kg from Hotel Azure" },
                                { time: "2h ago", text: "New listing added: 200 boxes of snacks" },
                            ].map((activity, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{activity.text}</p>
                                        <p className="text-xs text-slate-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
