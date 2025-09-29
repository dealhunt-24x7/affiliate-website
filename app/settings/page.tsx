"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);

  const clearCart = () => {
    localStorage.removeItem("affiliateCart");
    alert("Cart cleared");
  };
  const clearWishlist = () => {
    localStorage.removeItem("affiliateWishlist");
    alert("Wishlist cleared");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

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

      <div className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Data Management</h2>
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Cart
        </button>
        <button
          onClick={clearWishlist}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}
