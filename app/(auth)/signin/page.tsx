"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const { data: session } = useSession();
  const [localUser, setLocalUser] = useState<{ name: string; email?: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("dealhuntUser");
    if (stored) setLocalUser(JSON.parse(stored));
  }, []);

  const userName = session?.user?.name || localUser?.name || "";
  const userImage = session?.user?.image || undefined;
  const userInitial = userName ? userName[0].toUpperCase() : "U";

  const handleSocialSignIn = (provider: "google") => {
    signIn(provider, { callbackUrl: "/" });
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
          className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-2"
        >
          {/* Left Panel */}
          <motion.div
            variants={slideVariant}
            custom={-1}
            className="flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white order-1 md:order-none"
          >
            <div className="flex flex-col items-center gap-3">
              {userImage ? (
                <img
                  src={userImage}
                  alt={userName || "User"}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg object-cover"
                />
              ) : (
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 flex items-center justify-center text-3xl md:text-4xl font-semibold text-white">
                  {userInitial}
                </div>
              )}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold">{userName || "Welcome!"}</h3>
                <p className="text-xs md:text-sm opacity-80 mt-1">
                  {session ? "Signed in via Google" : "Sign in to continue"}
                </p>
              </div>
            </div>
            <p className="max-w-xs text-center text-xs md:text-sm opacity-85 mt-2 md:mt-0">
              DealHunt brings curated luxury deals right to you — sign in to save favorites, get offers and manage your account.
            </p>
          </motion.div>

          {/* Right Panel */}
          <motion.div variants={slideVariant} custom={1} className="p-8 order-2">
            <div className="max-w-md mx-auto">
              {!session ? (
                <>
                  {/* Google Button Only */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleSocialSignIn("google")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 bg-white hover:shadow transition"
                    >
                      <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                      Continue with Google
                    </button>
                  </div>

                  <div className="text-xs text-gray-400 text-center mt-4">
                    By continuing you agree to our <a className="underline">Terms</a> and{" "}
                    <a className="underline">Privacy Policy</a>.
                  </div>
                </>
              ) : (
                <div className="space-y-4 text-center">
                  <p className="text-lg font-semibold">Hello, {userName}!</p>
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
