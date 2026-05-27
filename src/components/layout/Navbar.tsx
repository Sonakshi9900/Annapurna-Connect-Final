import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

// Button ke wahi classes jo aapke Button component mein define hain
const buttonStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants = {
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground h-9 px-4 text-sm",
    primary: "bg-primary text-white hover:bg-primary-hover h-11 px-6 text-base"
};

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight shrink-0 transition-transform hover:scale-105">
                    <Leaf className="h-6 w-6" />
                    <span>Annapurna</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <Link href="#problem" className="hover:text-primary transition-colors">The Problem</Link>
                    <Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
                    <Link href="#impact" className="hover:text-primary transition-colors">Our Impact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    {/* Log in Link */}
                    <Link 
                        href="/login" 
                        className={cn(buttonStyles, variants.ghost, "hidden sm:inline-flex")}
                    >
                        Log in
                    </Link>
                    
                    {/* Get Started Link */}
                    <Link 
                        href="/role-selection" 
                        className={cn(buttonStyles, variants.primary)}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}