'use client';

import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthPage() {
  const { data: session } = useSession();
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // Email login (mock)
    alert(`Signed in as: ${email} (mock)`);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Signed up as: ${username} (${email}) (mock)`);
  };

  return (
    <main className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex flex-1 items-center justify-center relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
        <div className="text-center text-white px-10">
          <div className="w-32 h-32 mx-auto rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold mb-6">
            {session?.user?.image ? (
              <img src={session.user.image} alt="User" className="w-full h-full rounded-full" />
            ) : session?.user?.name ? (
              session.user.name.charAt(0)
            ) : (
              'DH'
            )}
          </div>
          <h1 className="text-4xl font-bold">
            {session?.user?.name ? session.user.name : 'DealHunt'}
          </h1>
          <p className="mt-2 opacity-80">
            {session ? 'Welcome back! You are logged in.' : 'Sign in to explore deals and offers!'}
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
          {!session ? (
            <>
              {/* Tabs */}
              <div className="flex justify-center gap-4 mb-6">
                <button
                  className={`px-4 py-2 font-medium rounded-t-lg ${
                    tab === 'signin' ? 'bg-gray-100 text-indigo-600 shadow' : 'text-gray-400'
                  }`}
                  onClick={() => setTab('signin')}
                >
                  Sign In
                </button>
                <button
                  className={`px-4 py-2 font-medium rounded-t-lg ${
                    tab === 'signup' ? 'bg-gray-100 text-indigo-600 shadow' : 'text-gray-400'
                  }`}
                  onClick={() => setTab('signup')}
                >
                  Sign Up
                </button>
              </div>

              {/* Sign In Form */}
              {tab === 'signin' && (
                <div className="space-y-4">
                  <button
                    onClick={() => signIn('google')}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
                  >
                    Continue with Google
                  </button>
                  <button
                    onClick={() => alert('Facebook login (placeholder)')}
                    className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
                  >
                    Continue with Facebook
                  </button>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <div className="text-xs text-gray-400">or</div>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>

                  <form onSubmit={handleSignIn} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Email or Username"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
                      Sign In
                    </button>
                  </form>

                  <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{' '}
                    <button
                      className="text-indigo-600 font-medium hover:underline"
                      onClick={() => setTab('signup')}
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              )}

              {/* Sign Up Form */}
              {tab === 'signup' && (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  />
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Sign Up
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <button
                      className="text-indigo-600 font-medium hover:underline"
                      onClick={() => setTab('signin')}
                    >
                      Sign In
                    </button>
                  </p>
                </form>
              )}
            </>
          ) : (
            <div className="space-y-4 text-center">
              <p className="text-lg font-semibold">Hello, {session.user?.name || email}!</p>
              <button
                onClick={() => signOut()}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </main>
  );
}
