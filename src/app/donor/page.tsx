"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>

      {/* Profile Settings */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Profile Information</h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input type="text" placeholder="Sonakshi" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input type="email" placeholder="sonakshi@example.com" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Phone Number</label>
            <input type="tel" placeholder="+91 XXXXXXXXXX" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Save Changes</button>
        </div>
      </div>

      {/* Password Change */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Change Password</h2>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-500">Current Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="text-sm text-gray-500">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Confirm New Password</label>
            <input type="password" placeholder="••••••••" className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-slate-700 dark:border-slate-600 dark:text-white" />
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Update Password</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Notifications</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 dark:text-slate-200 font-medium">Push Notifications</p>
            <p className="text-sm text-gray-400">Get notified about donation updates</p>
          </div>
          <button onClick={() => setNotifications(!notifications)} className={`w-12 h-6 rounded-full transition-colors ${notifications ? "bg-green-500" : "bg-gray-300"}`}>
            <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform mx-0.5 ${notifications ? "translate-x-6" : "translate-x-0"}`} />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 dark:text-slate-200 font-medium">Email Alerts</p>
            <p className="text-sm text-gray-400">Receive donation summaries via email</p>
          </div>
          <button onClick={() => setEmailAlerts(!emailAlerts)} className={`w-12 h-6 rounded-full transition-colors ${emailAlerts ? "bg-green-500" : "bg-gray-300"}`}>
            <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform mx-0.5 ${emailAlerts ? "translate-x-6" : "translate-x-0"}`} />
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow p-6 space-y-3 border border-red-100 dark:border-red-900">
        <h2 className="text-lg font-semibold text-red-500">Danger Zone</h2>
        <p className="text-sm text-gray-400">Once you delete your account, there is no going back.</p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Delete Account</button>
      </div>
    </div>
  );
}