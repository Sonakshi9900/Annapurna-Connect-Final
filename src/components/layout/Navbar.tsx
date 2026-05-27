"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Leaf, Moon, Sun, Menu, X } from "lucide-react";

const buttonStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants = {
  ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-foreground h-9 px-4 text-sm",
  primary: "bg-primary text-white hover:bg-primary-hover h-11 px-6 text-base"
};

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight shrink-0 transition-transform hover:scale-105">
          <Leaf className="h-6 w-6" />
          <span>Annapurna</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#problem" className="hover:text-primary transition-colors">The Problem</Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
          <Link href="#impact" className="hover:text-primary transition-colors">Our Impact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="h-9 w-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
          </button>

          <Link href="/login" className={cn(buttonStyles, variants.ghost, "hidden sm:inline-flex")}>
            Log in
          </Link>
          <Link href="/role-selection" className={cn(buttonStyles, variants.primary)}>
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-9 w-9 rounded-xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-2">
          <Link href="#problem" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>The Problem</Link>
          <Link href="#how-it-works" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>How it Works</Link>
          <Link href="#impact" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Our Impact</Link>
          <Link href="/login" className="block py-2 text-sm font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Log in</Link>
        </div>
      )}
    </header>
  );
}