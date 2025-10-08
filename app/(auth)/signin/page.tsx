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
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden">

        <div className="flex flex-col p-8 gap-6">

          <h2 className="text-3xl font-semibold text-center">
            {tab === 'signin' ? 'Sign In' : 'Sign Up'}
          </h2>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
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
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="text-xs text-gray-400 text-center">or</div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          {tab === 'signin' ? (
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

              <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                Sign In
              </button>

              <p className="text-center text-sm text-gray-500 mt-2">
                Don’t have an account?{' '}
                <button className="text-indigo-600 font-medium hover:underline" onClick={() => setTab('signup')}>
                  Sign Up
                </button>
              </p>
            </form>
          ) : (
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

              <p className="text-center text-sm text-gray-500 mt-2">
                Already have an account?{' '}
                <button className="text-indigo-600 font-medium hover:underline" onClick={() => setTab('signin')}>
                  Sign In
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
