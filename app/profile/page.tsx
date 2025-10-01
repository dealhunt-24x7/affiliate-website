"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("affiliateUser");
    if (user) {
      setUsername(user);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const name = prompt("Enter your name:");
    if (name) {
      localStorage.setItem("affiliateUser", name);
      setUsername(name);
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("affiliateUser");
    setUsername("");
    setLoggedIn(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {!loggedIn ? (
        <div className="space-y-4">
          <p className="text-gray-600">You are not logged in.</p>
          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Login / Sign Up
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700 font-semibold">Welcome, {username}!</p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
            <p className="text-gray-600 mb-2">Update your preferences here.</p>
            <button
              onClick={() => alert("Preferences updated (mock)")}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
