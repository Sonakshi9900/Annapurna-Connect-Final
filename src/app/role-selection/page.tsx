"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Leaf, ArrowLeft, HeartHandshake, Utensils } from "lucide-react";

export default function RoleSelectionPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <div className="w-full max-w-4xl space-y-8">
                <div className="text-center space-y-4">
                    <Leaf className="h-12 w-12 text-primary mx-auto" />
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                        How would you like to join?
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                        Choose whether you are here to donate surplus food or collect food and distribute it to those in need.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-8">
                    {/* Donor Card */}
                    <Link href="/signup?role=donor" className="group">
                        <Card className="h-full cursor-pointer border-2 border-transparent group-hover:border-green-500 transition-all shadow-md group-hover:shadow-soft-lg group-hover:-translate-y-1">
                            <CardContent className="p-8 text-center flex flex-col items-center space-y-4">
                                <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <Utensils className="h-12 w-12" />
                                </div>
                                <h2 className="text-2xl font-bold">I want to Donate</h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    I am a restaurant, event organizer, or individual with surplus food to give away.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* NGO Card */}
                    <Link href="/signup?role=ngo" className="group">
                        <Card className="h-full cursor-pointer border-2 border-transparent group-hover:border-orange-500 transition-all shadow-md group-hover:shadow-soft-lg group-hover:-translate-y-1">
                            <CardContent className="p-8 text-center flex flex-col items-center space-y-4">
                                <div className="h-24 w-24 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <HeartHandshake className="h-12 w-12" />
                                </div>
                                <h2 className="text-2xl font-bold">I am an NGO</h2>
                                <p className="text-slate-600 dark:text-slate-400">
                                    I am an organization or volunteer looking to rescue food and distribute it.
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>

                <div className="text-center pt-8">
                    <p className="text-slate-600 dark:text-slate-400">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-primary hover:underline">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
