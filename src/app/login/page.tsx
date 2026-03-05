"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from "@/components/ui/Card";
import { Leaf, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            setLoading(false);
            toast.success("Successfully logged in!");
            // Defaulting to donor for quick testing, in a real app would check role
            router.push("/donor");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl tracking-tight">
                        <Leaf className="h-8 w-8" />
                        <span>Annapurna</span>
                    </Link>
                </div>

                <Card className="w-full">
                    <CardHeader className="space-y-2 text-center">
                        <CardTitle className="text-2xl">Welcome back</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                    Remember me
                                </label>
                                <Link href="#" className="font-medium text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Button type="submit" className="w-full" size="lg" isLoading={loading}>
                                Sign In
                            </Button>
                        </form>
                        <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                            Don&apos;t have an account?{" "}
                            <Link href="/role-selection" className="font-medium text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
