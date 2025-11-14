"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifOffers, setNotifOffers] = useState(true);
  const [notifReferral, setNotifReferral] = useState(false);

  const clearPreferences = () => {
    localStorage.clear();
    alert("All saved preferences cleared!");
  };

  const deleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      alert("Your account deletion request has been submitted.");
    }
  };

  const logout = () => {
    alert("You’ve been logged out successfully.");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">

      <h1 className="text-3xl font-bold mb-6 text-yellow-600">Settings</h1>

      {/* Notification Preferences */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Notification Preferences</h2>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={notifEmail} onChange={() => setNotifEmail(!notifEmail)} className="accent-yellow-500" />
          Email Notifications
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={notifOffers} onChange={() => setNotifOffers(!notifOffers)} className="accent-yellow-500" />
          New Offers & Deals Alerts
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={notifReferral} onChange={() => setNotifReferral(!notifReferral)} className="accent-yellow-500" />
          Referral Reward Updates
        </label>
      </div>

      {/* Account Management */}
      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Account Management</h2>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Change Password
        </button>

        <button onClick={clearPreferences} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Clear Preferences
        </button>

        <button onClick={deleteAccount} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Delete Account
        </button>

        <button onClick={logout} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          Logout
        </button>
      </div>

      {/* Privacy & Support */}
      <div className="bg-white p-4 rounded-lg shadow space-y-3">
        <h2 className="font-semibold text-lg">Privacy & Support</h2>

        <p className="text-gray-600 text-sm">
          Read our{" "}
          <a href="/privacy" className="text-yellow-600 underline">Privacy Policy</a>.
        </p>

        <p className="text-sm">
          💬 <a href="/contact" className="text-yellow-600 underline">Contact Support</a>
        </p>
        <p className="text-sm">
          📝 <a href="/feedback" className="text-yellow-600 underline">Share Your Feedback</a>
        </p>
      </div>

      <div className="text-center">
        <a href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md">
          Back to Home
        </a>
      </div>

    </div>
  );
}
