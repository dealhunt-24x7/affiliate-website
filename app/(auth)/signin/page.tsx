"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEnvelope } from "react-icons/fa";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [isSignup, setIsSignup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignup) {
      // SignUp API
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (res.ok) {
        alert("Signup successful! You can now login.");
        setIsSignup(false);
      } else {
        const data = await res.json();
        alert(data.message || "Signup failed.");
      }
    } else {
      // Normal Email Login
      const res = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });

      if (res?.ok) {
        router.push("/");
      } else {
        alert("Invalid credentials!");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-50 via-white to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-yellow-600">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <input
              name="name"
              value={credentials.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            />
          )}

          <input
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
          />

          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition"
          >
            {loading ? "Please wait..." : isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-3">
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

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-sm text-yellow-600 hover:underline mt-2 text-center"
          >
            {isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          By continuing, you agree to our{" "}
          <a href="/privacy-policy" className="text-yellow-600 hover:underline">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="/terms" className="text-yellow-600 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
