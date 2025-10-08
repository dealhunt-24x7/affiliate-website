"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Sign in to DealHunt</h1>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-all"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
