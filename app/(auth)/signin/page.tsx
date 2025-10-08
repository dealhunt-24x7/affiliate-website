"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<"signin" | "signup">("signin");
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Local display name / avatar fallback (from mock signup)
  const [localUser, setLocalUser] = useState<{ name: string; email?: string } | null>(null);

  useEffect(() => {
    // If user stored in localStorage (mock signup) — show immediately
    try {
      const stored = localStorage.getItem("dealhuntUser");
      if (stored) setLocalUser(JSON.parse(stored));
    } catch (e) {
      // ignore
    }
  }, []);

  // When session loads (after social OAuth), session.user should have name/image
  const userName = session?.user?.name || localUser?.name || "";
  const userImage = session?.user?.image || undefined;
  const userInitial = userName ? userName[0].toUpperCase() : "U";

  // Social sign-in with explicit callbackUrl so NextAuth redirects back here/site root reliably
  const handleSocialSignIn = (provider: "google" | "facebook") => {
    signIn(provider, { callbackUrl: window.location.origin });
  };

  // Credentials sign-in (NextAuth CredentialsProvider)
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
      // success — NextAuth session will populate and redirect if callbackUrl was used.
      // We redirect manually to home to reflect session immediately.
      window.location.href = "/";
    }
  };

  // Mock sign-up — stores basic info to localStorage (client-side mock)
  const handleMockSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user = { name: username || emailOrUser, email: emailOrUser };
    try {
      localStorage.setItem("dealhuntUser", JSON.stringify(user));
      setLocalUser(user);
      alert("Signup successful (mock). Now you can Sign In or use a social login.");
      setTab("signin");
      setEmailOrUser("");
      setPassword("");
      setUsername("");
      setConfirmPassword("");
    } catch (err) {
      alert("Failed to save mock user locally.");
    }
  };

  // Animations
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
          {/* Left colorful panel (branding + avatar preview) */}
          <motion.div
            variants={slideVariant}
            custom={-1}
            className="hidden md:flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white"
          >
            {/* Avatar + Name area */}
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

          {/* Right panel: form */}
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

              {/* Social Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleSocialSignIn("google")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:shadow transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.2-4.4-50.4H272.1v95.6h147.4c-6.3 34.1-25.5 62.9-54.6 82.2v68.3h88.2c51.6-47.5 81.4-117.7 81.4-195.7z"/>
                    <path fill="#34A853" d="M272.1 544.3c73.6 0 135.4-24.4 180.5-66.2l-88.2-68.3c-24.6 16.6-56.1 26.3-92.3 26.3-70.9 0-131-47.8-152.4-112.1H30.6v70.5C75 486 166.5 544.3 272.1 544.3z"/>
                    <path fill="#FBBC05" d="M119.7 322.5c-5.8-17.4-9.1-35.9-9.1-55s3.3-37.6 9.1-55.1V142h-88.2C10.9 187.3 0 230.6 0 267.4s10.9 80.1 31.5 125.4l88.2-70.3z"/>
                    <path fill="#EA4335" d="M272.1 108.6c39.9-.6 75.3 14.1 103.4 40.8l77.5-77.5C404.8 25.9 343 0 272.1 0 166.5 0 75 58.3 30.6 142l88.2 70.4c21.4-64.3 81.5-112.1 152.4-112.1z"/>
                  </svg>
                  <span className="text-sm font-medium">Continue with Google</span>
                </button>

                <button
                  onClick={() => handleSocialSignIn("facebook")}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:shadow transition text-blue-600"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#1877F2" d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.2 10.44 21.95v-7.01H8.08v-2.87h2.36V9.03c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.08.18 2.08.18v2.28h-1.17c-1.15 0-1.51.72-1.51 1.46v1.74h2.57l-.41 2.87h-2.16V21.95C18.34 21.2 22 17.09 22 12.07z"/></svg>
                  <span className="text-sm font-medium">Continue with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <div className="text-xs text-gray-400">or</div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Form: Signin / Signup */}
              {tab === "signin" ? (
                <motion.form
                  initial="hidden"
                  animate="show"
                  variants={cardVariants}
                  onSubmit={handleCredentialsSignIn}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Email / Username</label>
                    <input
                      type="text"
                      required
                      value={emailOrUser}
                      onChange={(e) => setEmailOrUser(e.target.value)}
                      placeholder="Email or Username"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Password</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" /> Remember me
                    </label>
                    <a className="text-xs text-indigo-600 hover:underline" href="#">
                      Forgot?
                    </a>
                  </div>

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
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Username</label>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      required
                      value={emailOrUser}
                      onChange={(e) => setEmailOrUser(e.target.value)}
                      placeholder="Email"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Password</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Confirm Password</label>
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                  </div>

                  <button type="submit" className="w-full mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white rounded-lg px-4 py-3 font-medium hover:opacity-95 transition">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
