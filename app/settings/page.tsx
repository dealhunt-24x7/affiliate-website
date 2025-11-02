"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const clearCart = () => {
    localStorage.removeItem("affiliateCart");
    alert("Cart cleared successfully!");
  };

  const clearWishlist = () => {
    localStorage.removeItem("affiliateWishlist");
    alert("Wishlist cleared successfully!");
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-yellow-600">Settings</h1>

      {/* Preferences */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-lg">App Preferences</h2>
        <label className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="accent-yellow-500"
          />
        </label>

        <label className="flex items-center justify-between">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="accent-yellow-500"
          />
        </label>
      </section>

      {/* Data Management */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-lg">Data Management</h2>
        <button
          onClick={clearCart}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Cart
        </button>
        <button
          onClick={clearWishlist}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Wishlist
        </button>
      </section>

      {/* Links */}
      <section className="bg-white p-6 rounded-2xl shadow space-y-2">
        <a href="/privacy" className="block text-yellow-600 hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="block text-yellow-600 hover:underline">
          Terms of Use
        </a>
        <a href="mailto:support@dealhunt.in" className="block text-yellow-600 hover:underline">
          Contact Support
        </a>
      </section>
    </main>
  );
          }
