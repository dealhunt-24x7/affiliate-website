"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SignInPage() {
  const { data: session } = useSession();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Mock signup/login
  useEffect(() => {
    if (session?.user) {
      localStorage.setItem("user", JSON.stringify(session.user));
    }
  }, [session]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userData = { username, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert(isSignUp ? "Account created successfully!" : "Signed in successfully!");
  };

  if (session) {
    const user = session.user || {};
    const name = user.name || username || "User";
    const image = user.image || null;
    const firstLetter = name.charAt(0).toUpperCase();

    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-900 antialiased">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center text-white"
        >
          <div className="flex flex-col items-center gap-3">
            {image ? (
              <Image
                src={image}
                width={70}
                height={70}
                alt="user"
                className="rounded-full border-2 border-white"
              />
            ) : (
              <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full border-2 border-white bg-white/30 text-3xl font-semibold">
                {firstLetter}
              </div>
            )}
            <h2 className="text-2xl font-bold mt-2">{name}</h2>
            <button
              onClick={() =>
                signOut({ callbackUrl: window.location.origin + "/(auth)/signin" })
              }
              className="mt-4 px-6 py-2 bg-white/30 hover:bg-white/40 rounded-lg transition text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-900 antialiased">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={() => signIn("google")}
            className="w-full bg-white text-gray-800 py-3 rounded-lg font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Image src="/google.svg" alt="Google" width={20} height={20} />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("facebook")}
            className="w-full bg-[#1877F2] text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
            Continue with Facebook
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-4">
          <span className="h-[1px] bg-white/40 w-full"></span>
          <span className="absolute bg-transparent px-2 text-white text-sm">
            or {isSignUp ? "Sign up" : "Sign in"} with email
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs text-white mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-lg border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
          )}

          <div>
            <label className="block text-xs text-white mb-1">Email / Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Username"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <div>
            <label className="block text-xs text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded-lg border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-white/90 text-sm mt-6">
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="font-semibold underline hover:text-white"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </motion.div>
    </main>
  );
}
