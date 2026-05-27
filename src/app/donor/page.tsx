"use client";

import React from "react";
import { Package, Clock, CheckCircle2, TrendingUp } from "lucide-react";

export default function DonorDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome back, Sonakshi 👋</h1>
        <p className="text-gray-500 dark:text-slate-400 mt-1">Here's your donation overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Package, label: "Total Donations", value: "24", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
          { icon: Clock, label: "Active", value: "3", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" },
          { icon: CheckCircle2, label: "Delivered", value: "20", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
          { icon: TrendingUp, label: "Meals Saved", value: "480", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl shadow p-5 flex items-center gap-4">
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-500 dark:text-slate-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-200 mb-4">Recent Donations</h2>
        <div className="space-y-3">
          {[
            { name: "Leftover Party Buffet", date: "May 26, 2026", status: "Delivered", kg: "20 kg" },
            { name: "100 Loaves of Bread", date: "May 23, 2026", status: "Delivered", kg: "15 kg" },
            { name: "Vegetable Stew & Rice", date: "May 14, 2026", status: "Delivered", kg: "30 kg" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-slate-700 last:border-0">
              <div>
                <p className="font-medium text-gray-800 dark:text-slate-100">{item.name}</p>
                <p className="text-sm text-gray-400">{item.date} · {item.kg}</p>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}