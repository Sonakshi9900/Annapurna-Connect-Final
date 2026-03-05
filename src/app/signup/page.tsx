"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/Card";
import { Leaf, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

function SignupForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const role = searchParams.get("role") || "donor"; // 'donor' or 'ngo'

    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate signup
        setTimeout(() => {
            setLoading(false);
            toast.success("Account created successfully!");
            router.push(`/${role}`);
        }, 1500);
    };

    return (
        <Card className="w-full">
            <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-2xl">
                    Create a {role === "ngo" ? "NGO" : "Donor"} Account
                </CardTitle>
                <CardDescription>
                    Join us to make a difference in your community
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label={role === "ngo" ? "NGO Name" : "Full Name"}
                        type="text"
                        placeholder={role === "ngo" ? "Food Rescue Org" : "John Doe"}
                        required
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        required
                    />
                    <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        required
                    />
                    {role === "ngo" && (
                        <Input
                            label="Registration / License Number"
                            type="text"
                            placeholder="NGO-XXXX-YYYY"
                            required
                        />
                    )}

                    <Button type="submit" className="w-full mt-4" size="lg" isLoading={loading}>
                        Create Account
                    </Button>
                </form>
                <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    Already have an account?{" "}
                    <Link href="/login" className="font-medium text-primary hover:underline">
                        Log in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 py-12">
            <Link href="/role-selection" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back
            </Link>

            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
                        <Leaf className="h-8 w-8" />
                        <span>Annapurna</span>
                    </Link>
                </div>
                <Suspense fallback={<div>Loading form...</div>}>
                    <SignupForm />
                </Suspense>
            </div>
        </div>
    );
}
