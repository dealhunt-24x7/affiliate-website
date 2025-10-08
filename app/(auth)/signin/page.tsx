'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Signed in as: ${email} (mock)`)
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    alert(`Signed up as: ${username} (${email}) (mock)`)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-12">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left side - Branding + Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-10">
          <div className="w-full max-w-xs text-center">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto rounded-full bg-white/20 p-1 mb-6" />
            <h2 className="text-3xl font-semibold">Welcome Back</h2>
            <p className="mt-3 text-sm opacity-90">Sign in to access your dashboard, deals and personalized offers.</p>
          </div>
        </div>

        {/* Right side - Form Card */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            {/* Tabs */}
            <div className="flex mb-6 justify-center gap-4">
              <button
                className={`px-4 py-2 font-medium rounded-t-lg ${tab === 'signin' ? 'bg-white shadow text-indigo-600' : 'text-gray-400'}`}
                onClick={() => setTab('signin')}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 font-medium rounded-t-lg ${tab === 'signup' ? 'bg-white shadow text-indigo-600' : 'text-gray-400'}`}
                onClick={() => setTab('signup')}
              >
                Sign Up
              </button>
            </div>

            {/* Sign In Form */}
            {tab === 'signin' && (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => signIn('google')}
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  Continue with Google
                </button>

                <button
                  type="button"
                  onClick={() => signIn('facebook')}
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  Continue with Facebook
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <div className="text-xs text-gray-400">or</div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <form className="space-y-4" onSubmit={handleSignIn}>
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Email / Username</label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      placeholder="Email or Username"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600">Password</label>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      placeholder="Password"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-600">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      Remember me
                    </label>
                    <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot?</a>
                  </div>

                  <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                    Sign In
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-3">
                  Don’t have an account? <button className="text-indigo-600 font-medium hover:underline" onClick={() => setTab('signup')}>Sign Up</button>
                </p>
              </div>
            )}

            {/* Sign Up Form */}
            {tab === 'signup' && (
              <form className="space-y-4" onSubmit={handleSignUp}>
                <div>
                  <label className="block text-xs font-medium text-gray-600">Username</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Username"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Confirm Password"
                  />
                </div>

                <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                  Sign Up
                </button>

                <p className="text-center text-sm text-gray-500 mt-3">
                  Already have an account? <button className="text-indigo-600 font-medium hover:underline" onClick={() => setTab('signin')}>Sign In</button>
                </p>
              </form>
            )}

          </div>
        </div>
      </div>
    </main>
  )
}
