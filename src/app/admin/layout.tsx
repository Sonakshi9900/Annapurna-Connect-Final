import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { NotificationBell } from "@/components/ui/NotificationBell";
import { Settings } from "lucide-react";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
                    <div className="font-semibold text-lg md:hidden">Annapurna Admin</div>
                    <div className="hidden md:block text-slate-500 font-medium">Platform Administration</div>
                    <div className="flex items-center gap-4">
                        <NotificationBell />
                        <div className="h-8 w-8 rounded-full bg-slate-800 text-white flex items-center justify-center overflow-hidden">
                            <Settings className="h-4 w-4" />
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
