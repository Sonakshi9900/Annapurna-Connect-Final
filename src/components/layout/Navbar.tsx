import React from "react";
import Link from "next/link";
// Humne buttonVariants ko yahan import kiya hai
import { buttonVariants } from "../ui/Button"; 
import { Leaf } from "lucide-react";

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
                    {/* Yahan humne Button component hatakar buttonVariants ka use kiya hai */}
                    <Link 
                        href="/login" 
                        className={buttonVariants({ variant: "ghost" }) + " hidden sm:inline-flex"}
                    >
                        Log in
                    </Link>
                    
                    <Link 
                        href="/role-selection" 
                        className={buttonVariants({ variant: "default" })}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}