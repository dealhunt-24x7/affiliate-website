'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (res?.error) alert(res.error)
    else alert('Signed in successfully (mock/demo)')
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

        {/* Left side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-10">
          <div className="w-full max-w-xs text-center">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 mx-auto rounded-full bg-white/20 p-1 mb-6" />
            <h2 className="text-3xl font-semibold">Welcome Back</h2>
            <p className="mt-3 text-sm opacity-90">Sign in to access your dashboard, deals and personalized offers.</p>
            <div className="mt-8">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
                alt="illustration" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="flex mb-6 justify-center gap-4">
              <button
                className={`px-4 py-2 font-medium rounded-t-lg ${tab==='signin'?'bg-white shadow text-indigo-600':'text-gray-400'}`}
                onClick={()=>setTab('signin')}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 font-medium rounded-t-lg ${tab==='signup'?'bg-white shadow text-indigo-600':'text-gray-400'}`}
                onClick={()=>setTab('signup')}
              >
                Sign Up
              </button>
            </div>

            {tab==='signin' && (
              <div className="space-y-4">
                <button
                  onClick={()=>signIn('google')}
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  Continue with Google
                </button>

                <button
                  onClick={()=>signIn('facebook')}
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
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      placeholder="Email/Username"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                    Sign In
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-3">
                  Don’t have an account? <button className="text-indigo-600 font-medium hover:underline" onClick={()=>setTab('signup')}>Sign Up</button>
                </p>
              </div>
            )}

            {tab==='signup' && (
              <form className="space-y-4" onSubmit={handleSignUp}>
                <input type="text" required value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username"
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email/Username"
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <input type="password" required value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"
                  className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                  Sign Up
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Already have an account? <button className="text-indigo-600 font-medium hover:underline" onClick={()=>setTab('signin')}>Sign In</button>
                </p>
              </form>
            )}

          </div>
        </div>
      </div>
    </main>
  )
}
