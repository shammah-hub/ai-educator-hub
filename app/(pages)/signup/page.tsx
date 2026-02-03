'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Signup() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-[#faf8f5] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#3d4451] hover:text-[#c85a3e] mb-8 lg:mb-12 inline-block text-sm sm:text-base">
          ← Back to home
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light mb-3 lg:mb-4 text-[#1a2332]">Join the Community</h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] mb-8 lg:mb-16 font-light">
          Create your educator account to start tracking and reflecting on your AI usage
        </p>

        <button className="w-full py-4 lg:py-5 bg-white border border-[#e8e3dc] font-medium hover:bg-[#faf8f5] transition flex items-center justify-center gap-3 mb-6 lg:mb-8 text-sm sm:text-base">
          <svg width="18" height="18" viewBox="0 0 20 20" className="sm:w-5 sm:h-5">
            <path fill="#4285F4" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
            <path fill="#34A853" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
            <path fill="#FBBC05" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
            <path fill="#EA4335" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
          </svg>
          Sign up with Google
        </button>

        <div className="flex items-center my-6 lg:my-8">
          <div className="flex-1 h-px bg-[#e8e3dc]"></div>
          <span className="px-3 sm:px-4 text-[#3d4451] text-xs sm:text-sm">or sign up with email</span>
          <div className="flex-1 h-px bg-[#e8e3dc]"></div>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 sm:gap-4 mb-8 lg:mb-16">
          <div className={`flex-1 h-1 ${step >= 1 ? 'bg-[#c85a3e]' : 'bg-[#e8e3dc]'} transition`}></div>
          <div className={`flex-1 h-1 ${step >= 2 ? 'bg-[#c85a3e]' : 'bg-[#e8e3dc]'} transition`}></div>
          <div className={`flex-1 h-1 ${step >= 3 ? 'bg-[#c85a3e]' : 'bg-[#e8e3dc]'} transition`}></div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); if(step < 3) setStep(step + 1); else window.location.href = '/dashboard' }}>
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Account Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 lg:mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#3d4451] mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="Jane" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d4451] mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="Doe" required />
                </div>
              </div>
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-[#3d4451] mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="jane.doe@university.edu" required />
              </div>
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-[#3d4451] mb-2">Password</label>
                <input type="password" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="Create a secure password" required />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Professional Background</h2>
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-[#3d4451] mb-2">Institution</label>
                <input type="text" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="University of X" required />
              </div>
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-[#3d4451] mb-2">Department</label>
                <input type="text" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="e.g., Computer Science, Education" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5 lg:mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#3d4451] mb-2">Years Teaching</label>
                  <input type="number" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 text-sm sm:text-base" placeholder="5" min="0" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3d4451] mb-2">Primary Role</label>
                  <select className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" required>
                    <option value="">Select role</option>
                    <option>Lecturer</option>
                    <option>Professor</option>
                    <option>Instructor</option>
                    <option>Teaching Assistant</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">AI Experience</h2>
              <div className="mb-6 lg:mb-8">
                <label className="block text-sm font-medium text-[#3d4451] mb-4">How familiar are you with AI tools in teaching?</label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="radio" name="familiarity" value="beginner" className="w-4 h-4" required />
                    <span>Beginner</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="radio" name="familiarity" value="intermediate" className="w-4 h-4" />
                    <span>Intermediate</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm sm:text-base">
                    <input type="radio" name="familiarity" value="advanced" className="w-4 h-4" />
                    <span>Advanced</span>
                  </label>
                </div>
              </div>
              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-[#3d4451] mb-2">What are your goals? (Optional)</label>
                <textarea className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base" placeholder="e.g., Track my AI usage, learn from peers..."></textarea>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-[#e8e3dc]">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)} className="flex-1 py-4 lg:py-5 bg-[#e8e3dc] text-[#1a2332] font-medium hover:bg-[#7a8b7e] hover:text-white transition text-sm sm:text-base">
                Back
              </button>
            )}
            <button type="submit" className="flex-1 py-4 lg:py-5 bg-[#1a2332] text-[#faf8f5] font-medium hover:bg-[#c85a3e] transition text-sm sm:text-base">
              {step === 3 ? 'Create Account' : 'Continue'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6 lg:mt-8 text-[#3d4451] text-sm sm:text-base">
          Already have an account? <Link href="/login" className="text-[#c85a3e] font-medium hover:underline">Sign in</Link>
        </div>
      </div>
    </div>
  )
}