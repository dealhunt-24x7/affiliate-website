// app/(auth)/login/page.tsx 'use client'

import React from 'react' import { signIn } from 'next-auth/react'

export default function LoginPage() { return ( <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-6 py-12"> <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

{/* left image / branding area */}
    <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-10">
      <div className="w-full max-w-xs text-center">
        <div className="mb-6">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto rounded-full bg-white/20 p-1" />
        </div>
        <h2 className="text-3xl font-semibold">Welcome Back</h2>
        <p className="mt-3 text-sm opacity-90">Sign in to access your dashboard, deals and personalized offers.</p>
        <div className="mt-8">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" alt="illustration" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>

    {/* right: form */}
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">Sign in to your account</h1>
        <p className="text-sm text-gray-500 mt-2">Enter your email and password to continue</p>

        <div className="mt-6 space-y-4">
          {/* Google Login Button */}
          <button
            type="button"
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" className="w-5 h-5" aria-hidden>
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.2-4.4-50.4H272.1v95.6h147.4c-6.3 34.1-25.5 62.9-54.6 82.2v68.3h88.2c51.6-47.5 81.4-117.7 81.4-195.7z"/>
              <path fill="#34A853" d="M272.1 544.3c73.6 0 135.4-24.4 180.5-66.2l-88.2-68.3c-24.6 16.6-56.1 26.3-92.3 26.3-70.9 0-131-47.8-152.4-112.1H30.6v70.5C75 486 166.5 544.3 272.1 544.3z"/>
              <path fill="#FBBC05" d="M119.7 322.5c-5.8-17.4-9.1-35.9-9.1-55s3.3-37.6 9.1-55.1V142h-88.2C10.9 187.3 0 230.6 0 267.4s10.9 80.1 31.5 125.4l88.2-70.3z"/>
              <path fill="#EA4335" d="M272.1 108.6c39.9-.6 75.3 14.1 103.4 40.8l77.5-77.5C404.8 25.9 343 0 272.1 0 166.5 0 75 58.3 30.6 142l88.2 70.4c21.4-64.3 81.5-112.1 152.4-112.1z"/>
            </svg>
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className="text-xs text-gray-400">or</div>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-medium text-gray-600">Email</label>
              <input type="email" required className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="you@example.com" />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-medium text-gray-600">Password</label>
                <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot?</a>
              </div>
              <input type="password" required className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                Remember me
              </label>
            </div>

            <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">Sign in</button>

            <p className="text-center text-sm text-gray-500 mt-3">Don’t have an account? <a href="#" className="text-indigo-600 font-medium hover:underline">Sign up</a></p>
          </form>
        </div>

        <footer className="mt-6 text-xs text-gray-400">By signing in you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.</footer>
      </div>
    </div>
  </div>
</main>

) }

