'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function SignInPage() {
  const router = useRouter()
  const [tab, setTab] = useState<'signin' | 'signup'>('signin')
  const [emailOrUser, setEmailOrUser] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // handle credential sign in (NextAuth CredentialsProvider)
  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await signIn('credentials', {
      redirect: false,
      email: emailOrUser,
      password,
    })
    setLoading(false)
    if (res?.error) {
      alert(res.error)
    } else {
      // success - redirect to home or profile
      router.push('/')
    }
  }

  // handle google / facebook sign in with explicit callbackUrl
  const handleSocialSignIn = (provider: 'google' | 'facebook') => {
    // explicit callbackUrl to ensure redirect after successful OAuth
    signIn(provider, { callbackUrl: window.location.origin })
  }

  // mock signup (store locally) — replace with actual backend later
  const handleMockSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // store minimal mock user so navbar/profile can read if needed
    const user = { name: username || emailOrUser, email: emailOrUser }
    try {
      localStorage.setItem('dealhuntUser', JSON.stringify(user))
      alert('Signup successful (mock). You can now sign in.')
      setTab('signin')
      setEmailOrUser('')
      setPassword('')
      setUsername('')
      setConfirmPassword('')
    } catch (err) {
      alert('Unable to save user locally (mock).')
    }
  }

  // framer-motion variants
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } },
  }
  const sliderVariant = {
    hidden: { x: tab === 'signin' ? 40 : -40, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left graphic / brand */}
        <div className="hidden md:flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="flex flex-col items-center">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full bg-white/20 p-1 mb-4" />
            <h3 className="text-3xl font-semibold">DealHunt</h3>
            <p className="mt-2 text-sm opacity-90 text-center max-w-xs">Find luxury deals & personalised offers. Sign in to get curated picks.</p>
          </div>
          <div className="mt-4 w-full max-w-xs">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" alt="illustration" className="rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Right: animated form area */}
        <div className="p-8">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setTab('signin')}
                className={`px-4 py-2 rounded-t-lg ${tab === 'signin' ? 'bg-white shadow text-indigo-600' : 'text-gray-400'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`px-4 py-2 rounded-t-lg ${tab === 'signup' ? 'bg-white shadow text-indigo-600' : 'text-gray-400'}`}
              >
                Sign Up
              </button>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {/* Social buttons */}
              <motion.div variants={sliderVariant} className="space-y-3">
                <button
                  onClick={() => handleSocialSignIn('google')}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:shadow transition"
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
                  onClick={() => handleSocialSignIn('facebook')}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:shadow transition"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#1877F2" d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.2 10.44 21.95v-7.01H8.08v-2.87h2.36V9.03c0-2.34 1.39-3.63 3.52-3.63 1.02 0 2.08.18 2.08.18v2.28h-1.17c-1.15 0-1.51.72-1.51 1.46v1.74h2.57l-.41 2.87h-2.16V21.95C18.34 21.2 22 17.09 22 12.07z"/></svg>
                  <span className="text-sm font-medium">Continue with Facebook</span>
                </button>
              </motion.div>

              {/* divider */}
              <motion.div variants={sliderVariant} className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <div className="text-xs text-gray-400 text-center">or</div>
                <div className="flex-1 h-px bg-gray-200" />
              </motion.div>

              {/* animated signin or signup form */}
              <motion.div variants={sliderVariant} className="rounded-lg p-1">
                {tab === 'signin' ? (
                  <form onSubmit={handleCredentialsSignIn} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600">Email / Username</label>
                      <input
                        type="text"
                        value={emailOrUser}
                        onChange={(e) => setEmailOrUser(e.target.value)}
                        required
                        placeholder="Email or Username"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-gray-600">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        Remember me
                      </label>
                      <a className="text-xs text-indigo-600 hover:underline" href="#">Forgot?</a>
                    </div>

                    <button disabled={loading} type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                      {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-2">
                      Don’t have an account?{' '}
                      <button onClick={() => setTab('signup')} className="text-indigo-600 font-medium hover:underline">Sign Up</button>
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleMockSignUp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Username"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600">Email</label>
                      <input
                        type="email"
                        value={emailOrUser}
                        onChange={(e) => setEmailOrUser(e.target.value)}
                        required
                        placeholder="Email"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600">Password</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600">Confirm Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password"
                        className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <button type="submit" className="w-full mt-2 bg-indigo-600 text-white rounded-lg px-4 py-3 font-medium hover:bg-indigo-700 transition">
                      Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-2">
                      Already have an account?{' '}
                      <button onClick={() => setTab('signin')} className="text-indigo-600 font-medium hover:underline">Sign In</button>
                    </p>
                  </form>
                )}
              </motion.div>

              <motion.div variants={sliderVariant} className="text-xs text-gray-400 text-center mt-1">
                By continuing you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy Policy</a>.
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
