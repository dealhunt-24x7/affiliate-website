"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);

  const clearPreferences = () => {
    localStorage.clear();
    alert("All saved preferences cleared!");
  };

  const logout = () => {
    alert("You’ve been logged out successfully.");
    // Later: integrate NextAuth signOut()
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">Settings</h1>

      {/* Notification Preference */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Preferences</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="accent-yellow-500"
          />
          Enable Notifications
        </label>
      </div>

      {/* Account Management */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Account Management</h2>
        <button
          onClick={clearPreferences}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Clear Preferences
        </button>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Privacy Section */}
      <div className="bg-white p-4 rounded-lg shadow space-y-3">
        <h2 className="font-semibold text-lg">Privacy & Security</h2>
        <p className="text-gray-600 text-sm">
          DealHunt never shares your personal information with third parties.
          For more details, visit our{" "}
          <a href="/privacy" className="text-yellow-600 underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
