"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isSignup, setIsSignup] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isSignup) {
        // Credentials login
        const res = await signIn("credentials", {
          redirect: false,
          email: credentials.email,
          password: credentials.password,
        });

        if (res?.ok) router.push("/");
        else alert("Invalid email or password!");
      } else {
        alert("Signup currently not enabled. Please login using Google.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setSocialLoading(true);
    await signIn("google");
    setSocialLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-yellow-50 via-white to-yellow-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-yellow-600">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        {/* Credentials Login */}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Please wait..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={socialLoading}
          className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 transition w-full disabled:opacity-50"
        >
          <FcGoogle size={22} /> {socialLoading ? "Redirecting..." : "Continue with Google"}
        </button>

        {/* Switch to Signup */}
        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm text-yellow-600 hover:underline mt-2 w-full text-center"
        >
          {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>

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
}
