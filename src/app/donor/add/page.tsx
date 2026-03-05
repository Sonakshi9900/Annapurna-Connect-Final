"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Leaf, UploadCloud, Clock, MapPin } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddDonationPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate submission
        setTimeout(() => {
            setLoading(false);
            toast.success("Donation listed successfully! NGOs are being notified.");
            router.push("/donor");
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Add New Donation</h1>
                <p className="text-slate-500">Provide details about the surplus food so we can match it with an NGO quickly.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-primary" />
                        Food Details
                    </CardTitle>
                    <CardDescription>Accurate information helps NGOs plan their logistics.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                label="Food Title or Description"
                                placeholder="e.g., 50 Boxes of Mixed Sandwiches"
                                required
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    label="Quantity/Weight"
                                    placeholder="e.g., ~15 kg"
                                    required
                                />
                                <Input
                                    label="Type of Food"
                                    placeholder="e.g., Cooked Meals, Raw Veggies"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <div className="space-y-4">
                                <label className="text-sm font-medium leading-none text-foreground flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-slate-500" />
                                    Estimated Expiry Time
                                </label>
                                <Input
                                    type="datetime-local"
                                    required
                                />
                                <p className="text-xs text-slate-500">How long until the food is no longer safe to eat?</p>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-medium leading-none text-foreground flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-slate-500" />
                                    Pickup Address
                                </label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-xl border border-border bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                                    placeholder="123 Volunteer Street, Sector 4..."
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <label className="text-sm font-medium leading-none text-foreground block mb-2">
                                Attach Photo (Optional)
                            </label>
                            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                <UploadCloud className="h-8 w-8 text-slate-400 mb-2" />
                                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-border bg-slate-50 dark:bg-slate-900/50 rounded-b-2xl pt-6">
                        <Button variant="outline" type="button" onClick={() => router.back()}>Cancel</Button>
                        <Button type="submit" isLoading={loading}>List Donation</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
