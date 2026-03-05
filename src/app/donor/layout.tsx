import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { NotificationBell } from "@/components/ui/NotificationBell";
import { User } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
                    <div className="font-semibold text-lg md:hidden">Annapurna</div>
                    <div className="hidden md:block">
                        {/* Optional page title spot */}
                    </div>
                    <div className="flex items-center gap-4">
                        <NotificationBell />
                        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 overflow-hidden border border-border">
                            <User className="h-5 w-5" />
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
