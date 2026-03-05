"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, History, Clock, Settings, Leaf, LogOut } from "lucide-react";
import { Button } from "../ui/Button";

interface SidebarItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

const donorNav: SidebarItem[] = [
    { name: "Overview", href: "/donor", icon: Home },
    { name: "Add Donation", href: "/donor/add", icon: Leaf },
    { name: "Active Donations", href: "/donor/active", icon: Clock },
    { name: "History", href: "/donor/history", icon: History },
    { name: "Settings", href: "/donor/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    // Using generic mock data; in an actual app, this is determined by user role context
    const navItems = donorNav;

    return (
        <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card">
            <div className="flex h-16 items-center px-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
                    <Leaf className="h-6 w-6" />
                    <span>Annapurna</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-4 flex flex-col gap-1 px-3">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all group",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-50")} />
                            {item.name}
                        </Link>
                    );
                })}
            </div>
            <div className="p-4 border-t border-border">
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30">
                    <LogOut className="h-5 w-5 mr-3" />
                    Log out
                </Button>
            </div>
        </aside>
    );
}
