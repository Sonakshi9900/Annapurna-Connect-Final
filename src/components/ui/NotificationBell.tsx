"use client";

import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "./Button";

export function NotificationBell() {
    const [hasUnread, setHasUnread] = useState(true);

    return (
        <Button variant="ghost" size="icon" className="relative rounded-full" onClick={() => setHasUnread(false)}>
            <Bell className="h-5 w-5" />
            {hasUnread && (
                <span className="absolute top-2 right-2.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
            )}
        </Button>
    );
}
