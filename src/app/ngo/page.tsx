"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Utensils, Navigation, AlertCircle, HeartHandshake } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";

const availableDonations = [
    {
        id: "DON-102",
        title: "Fresh Produce Assortment",
        quantity: "25 kg",
        donor: "Green Market",
        address: "45 Market Street, North Block",
        distance: "1.2 miles away",
        expiry: new Date(Date.now() + 1000 * 60 * 60 * 4), // 4 hours
    },
    {
        id: "DON-103",
        title: "15 Boxes of Sandwiches",
        quantity: "10 kg",
        donor: "Corporate Events Catering",
        address: "Tech Park, Building C",
        distance: "3.5 miles away",
        expiry: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours
    },
    {
        id: "DON-104",
        title: "Baked Goods & Bread",
        quantity: "12 kg",
        donor: "Sunrise Bakery",
        address: "89 Main Avenue",
        distance: "0.8 miles away",
        expiry: new Date(Date.now() + 1000 * 60 * 90), // 1.5 hours
    }
];

export default function NGODashboard() {
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const handleAccept = (id: string) => {
        setLoadingId(id);
        setTimeout(() => {
            setLoadingId(null);
            toast.success("Donation accepted! The donor has been notified to expect exactly you.");
        }, 1500);
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Available Rescue Ops</h1>
                    <p className="text-slate-500">Real-time surplus food alerts nearby.</p>
                </div>
                <div className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span className="text-slate-700 dark:text-slate-300">Searching within <span className="font-bold text-slate-900 dark:text-white">5 miles</span></span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column: List of Donations */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-2 mb-2 text-slate-700 dark:text-slate-300 font-medium">
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                        Act quickly! {availableDonations.length} urgent listings in your area.
                    </div>

                    {availableDonations.map((donation) => (
                        <Card key={donation.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                            <div className="h-1 w-full bg-primary/20"></div>
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row justify-between gap-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">{donation.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <Utensils className="h-4 w-4" />
                                            {donation.quantity} from <span className="font-medium text-slate-900 dark:text-slate-100">{donation.donor}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <MapPin className="h-4 w-4" />
                                            {donation.address} <span className="text-slate-400">({donation.distance})</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                                            <Clock className="h-4 w-4" />
                                            Expires in {formatDistanceToNow(donation.expiry)}
                                        </div>
                                    </div>
                                    <div className="flex flex-row sm:flex-col justify-between sm:justify-start gap-3 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-border">
                                        <Button
                                            className="w-full sm:w-32"
                                            isLoading={loadingId === donation.id}
                                            onClick={() => handleAccept(donation.id)}
                                        >
                                            Accept
                                        </Button>
                                        <Button variant="outline" className="w-full sm:w-32">
                                            <Navigation className="mr-2 h-4 w-4" />
                                            Map
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Right Column: Mini Map Preview (Mocked) & Status */}
                <div className="space-y-6">
                    <Card className="overflow-hidden">
                        <CardHeader className="bg-slate-50 dark:bg-slate-900/50 pb-4">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <MapPin className="h-5 w-5 text-primary" />
                                Live Map View
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="h-64 bg-slate-200 dark:bg-slate-800 relative flex items-center justify-center border-y border-border">
                                <span className="text-slate-400 font-medium text-sm">Interactive Map Integration Here</span>
                                {/* Mock map pins */}
                                <div className="absolute top-1/4 left-1/4 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(22,163,74,0.8)] animate-pulse"></div>
                                <div className="absolute top-1/2 right-1/3 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(22,163,74,0.8)] animate-pulse"></div>
                                <div className="absolute bottom-1/3 left-1/2 h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_rgba(22,163,74,0.8)] animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -mt-2 -ml-2 h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center">
                                    <HeartHandshake className="h-3 w-3 text-white" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-slate-50 dark:bg-slate-900/50 pt-4 text-xs text-slate-500">
                            * Map requires location permissions from your device.
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-md">Active Pickups</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-3">
                                <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900/50 rounded-lg p-3 text-sm">
                                    <div className="font-semibold text-orange-800 dark:text-orange-400 mb-1">Bakery Goods Rescue</div>
                                    <div className="text-orange-600/80 dark:text-orange-500/80 mb-2">Downtown Deli Bakery</div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-orange-700 dark:text-orange-300">
                                        <div className="h-2 flex-1 bg-orange-200 dark:bg-orange-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-1/2"></div>
                                        </div>
                                        Moving to local
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
