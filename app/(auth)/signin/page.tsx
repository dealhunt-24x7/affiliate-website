"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-semibold">Sign in to DealHunt</h1>

      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Sign in with Google
      </button>

      <button
        onClick={() => signIn("credentials")}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
      >
        Sign in with Email
      </button>
    </div>
  );
}
