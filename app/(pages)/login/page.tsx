'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ApiError } from '@/app/lib/api'
import { useAuth } from '@/app/lib/auth'

export default function Login() {
  const router = useRouter()
  const { login, token, isLoading: authLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!authLoading && token) {
      router.replace('/dashboard')
    }
  }, [authLoading, token, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await login({ email, password })
      router.replace('/dashboard')
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to sign in right now.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Panel */}
      <div className="flex-1 bg-[#1a2332] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
        {/* Refined geometric background */}
        <div className="absolute inset-0 opacity-30">
          {/* Vertical lines */}
          <div className="absolute left-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#7a8b7e] to-transparent"></div>
          <div className="absolute left-[30%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#c85a3e]/50 to-transparent"></div>
          <div className="absolute right-[25%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#7a8b7e]/40 to-transparent"></div>
          
          {/* Horizontal accent lines */}
          <div className="absolute top-[30%] left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c85a3e]/30 to-transparent"></div>
          <div className="absolute bottom-[35%] left-0 right-0 h-px bg-linear-to-r from-transparent via-[#7a8b7e]/20 to-transparent"></div>
          
          {/* Corner decorative elements */}
          <div className="absolute top-[20%] right-[20%] w-32 h-32 border-t border-r border-[#c85a3e]/20"></div>
          <div className="absolute bottom-[25%] left-[10%] w-24 h-24 border-b border-l border-[#7a8b7e]/20"></div>
          
          {/* Small accent squares */}
          <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-[#c85a3e]/40"></div>
          <div className="absolute top-[60%] right-[30%] w-1.5 h-1.5 bg-[#7a8b7e]/50"></div>
          <div className="absolute bottom-[40%] right-[15%] w-1 h-1 bg-[#c85a3e]/30"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#faf8f5] mb-6 lg:mb-8 leading-tight">
            Welcome<br/>Back
          </h1>
          <p className="text-[#e8e3dc] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
            Continue your journey toward mindful AI integration in teaching.
          </p>
          
          {/* Decorative quote or feature highlight */}
          <div className="mt-8 lg:mt-16 pt-6 lg:pt-8 border-t border-[#7a8b7e]/20 max-w-lg hidden sm:block">
            <p className="text-[#e8e3dc]/70 text-sm font-light italic leading-relaxed">
              &ldquo;This platform transformed how I think about AI in my classroom. It&rsquo;s not just about efficiency, it&rsquo;s about intentionality.&rdquo;
            </p>
            <p className="text-[#7a8b7e] text-sm mt-3">— Dr. Sarah Martinez, Professor of Education</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#faf8f5] flex items-center justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-0">
        <div className="w-full max-w-md">
          <Link href="/" className="text-[#3d4451] hover:text-[#c85a3e] mb-8 lg:mb-12 inline-block transition text-sm sm:text-base">
            ← Back to home
          </Link>

          <h2 className="text-3xl sm:text-4xl font-serif mb-3 lg:mb-4 text-[#1a2332]">Sign In</h2>
          <p className="text-[#3d4451] mb-8 lg:mb-12 font-light text-sm sm:text-base">Access your educator dashboard</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#3d4451] mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 transition text-sm sm:text-base"
                placeholder="your.email@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#3d4451] mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 transition text-sm sm:text-base"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-right mt-2">
                <a href="#" className="text-xs sm:text-sm text-[#3d4451] hover:text-[#c85a3e] transition">Forgot password?</a>
              </div>
            </div>

            {error && (
              <div className="mb-4 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-[#1a2332] py-4 text-sm font-medium text-[#faf8f5] transition hover:bg-[#c85a3e] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base lg:mt-8 lg:py-5"
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="flex items-center my-6 lg:my-8">
            <div className="flex-1 h-px bg-[#e8e3dc]"></div>
            <span className="px-4 text-[#3d4451] text-xs sm:text-sm">or continue with</span>
            <div className="flex-1 h-px bg-[#e8e3dc]"></div>
          </div>

          <button className="flex w-full items-center justify-center gap-3 border border-[#e8e3dc] bg-white py-4 text-sm font-medium transition hover:bg-[#faf8f5] sm:text-base lg:py-5">
            <svg width="18" height="18" viewBox="0 0 20 20" className="sm:w-5 sm:h-5">
              <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
              <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
              <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
              <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
            </svg>
            Google login is not in the MVP
          </button>

          <div className="text-center mt-6 lg:mt-8 text-[#3d4451] text-sm sm:text-base">
            Don&apos;t have an account? <Link href="/signup" className="text-[#c85a3e] font-medium hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
