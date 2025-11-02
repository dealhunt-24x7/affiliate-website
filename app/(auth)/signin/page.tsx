"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <Image
          src="/signin-illustration.jpg"
          alt="Sign In Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome Back 👋
          </h1>
          <p className="text-gray-500 mb-6">
            Sign in to continue to <span className="text-yellow-500 font-semibold">DealHunt</span>
          </p>

          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.8 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.5 7.1 28.9 5 24 5 13.5 5 5 13.5 5 24s8.5 19 19 19 19-8.5 19-19c0-1.3-.1-2.7-.4-3.9z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c2.8 0 5.4 1.1 7.4 2.8l5.7-5.7C33.5 7.1 28.9 5 24 5c-7.3 0-13.5 3.7-17.1 9.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 43c5.3 0 9.8-1.8 13.1-4.9l-6-4.9C29.4 35 24 35 24 35c-5.4 0-9.8-2.9-12.1-7.1l-6.5 5C10.5 39.6 16.8 43 24 43z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3C34.2 32.1 29.4 35 24 35v8c6.8 0 12.5-2.3 16.6-6.1l-7-5.7z"
              />
            </svg>
            Continue with Google
          </button>

          <p className="text-gray-500 text-sm mt-6">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-yellow-500 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
