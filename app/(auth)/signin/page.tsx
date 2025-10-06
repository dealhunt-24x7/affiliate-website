"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 via-white to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-yellow-600">Welcome Back</h1>

        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 transition"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-blue-50 transition"
          >
            <FaFacebook size={22} className="text-blue-600" /> Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
