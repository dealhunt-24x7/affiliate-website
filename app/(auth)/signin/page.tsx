"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [localUser, setLocalUser] = useState<{ name: string; email?: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("dealhuntUser");
    if (stored) setLocalUser(JSON.parse(stored));
  }, []);

  const userName = session?.user?.name || localUser?.name || "";
  const userImage = session?.user?.image || undefined;
  const userInitial = userName ? userName[0].toUpperCase() : "U";

  const handleSocialSignIn = (provider: "google" | "facebook") => {
    signIn(provider, { callbackUrl: "/" });
  };

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: emailOrUser,
      password,
    });
    setLoading(false);
    if (res?.error) {
      alert(res.error);
    } else {
      window.location.href = "/";
    }
  };

  const handleMockSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user = { name: username || emailOrUser, email: emailOrUser };
    localStorage.setItem("dealhuntUser", JSON.stringify(user));
    setLocalUser(user);
    alert("Signup successful (mock). Now you can Sign In or use a social login.");
    setTab("signin");
    setEmailOrUser("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } },
  };

  const slideVariant = {
    hidden: (dir: number) => ({ x: dir * 40, opacity: 0 }),
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400">
      <div className="w-full max-w-4xl p-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={cardVariants}
          className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left panel */}
          <motion.div
            variants={slideVariant}
            custom={-1}
            className="hidden md:flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white"
          >
            <div className="flex flex-col items-center gap-3">
              {userImage ? (
                <img
                  src={userImage}
                  alt={userName || "User"}
                  className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center text-4xl font-semibold text-white">
                  {userInitial}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold">{userName || "Welcome!"}</h3>
                <p className="text-sm opacity-80 mt-1">
                  {session ? "Signed in via social account" : localUser ? "Signed up (mock)" : "Sign in to continue"}
                </p>
              </div>
            </div>
            <p className="max-w-xs text-center text-sm opacity-85">
              DealHunt brings curated luxury deals right to you — sign in to save favorites, get offers and manage your account.
            </p>
          </motion.div>

          {/* Right panel */}
          <motion.div variants={slideVariant} custom={1} className="p-8">
            <div className="max-w-md mx-auto">
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={() => setTab("signin")}
                  className={`px-4 py-2 rounded-t-lg ${tab === "signin" ? "bg-white shadow text-indigo-600" : "text-gray-400"}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setTab("signup")}
                  className={`px-4 py-2 rounded-t-lg ${tab === "signup" ? "bg-white shadow text-indigo-600" : "text-gray-400"}`}
                >
                  Sign Up
                </button>
              </div>

              {!session ? (
                <>
                  {/* Social Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleSocialSignIn("google")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:shadow transition"
                    >
                      Continue with Google
                    </button>
                    <button
                      onClick={() => handleSocialSignIn("facebook")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:shadow transition text-blue-600"
                    >
                      Continue with Facebook
                    </button>
                  </div>

                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <div className="text-xs text-gray-400">or</div>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {tab === "signin" ? (
                    <motion.form
                      initial="hidden"
                      animate="show"
                      variants={cardVariants}
                      onSubmit={handleCredentialsSignIn}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        required
                        value={emailOrUser}
                        onChange={(e) => setEmailOrUser(e.target.value)}
                        placeholder="Email or Username"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <button
                        disabled={loading}
                        type="submit"
                        className="w-full mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-lg px-4 py-3 font-medium hover:opacity-95 transition"
                      >
                        {loading ? "Signing in..." : "Sign In"}
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        Don’t have an account?{" "}
                        <button onClick={() => setTab("signup")} className="text-indigo-600 font-medium hover:underline">
                          Sign Up
                        </button>
                      </p>
                    </motion.form>
                  ) : (
                    <motion.form
                      initial="hidden"
                      animate="show"
                      variants={cardVariants}
                      onSubmit={handleMockSignUp}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <input
                        type="email"
                        required
                        value={emailOrUser}
                        onChange={(e) => setEmailOrUser(e.target.value)}
                        placeholder="Email"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <button
                        type="submit"
                        className="w-full mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-lg px-4 py-3 font-medium hover:opacity-95 transition"
                      >
                        Sign Up
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        Already have an account?{" "}
                        <button onClick={() => setTab("signin")} className="text-indigo-600 font-medium hover:underline">
                          Sign In
                        </button>
                      </p>
                    </motion.form>
                  )}

                  <div className="text-xs text-gray-400 text-center mt-4">
                    By continuing you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.
                  </div>
                </>
              ) : (
                <div className="space-y-4 text-center">
                  <p className="text-lg font-semibold">Hello, {userName || emailOrUser}!</p>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
