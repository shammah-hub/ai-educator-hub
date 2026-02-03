'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Reflect() {
  const searchParams = useSearchParams()
  const logId = searchParams.get('logId') || '1'

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12 max-w-5xl">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Reflection</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Reflect on your AI usage experience</p>
        </div>

        <form className="bg-white p-6 sm:p-8 lg:p-12" onSubmit={(e) => { e.preventDefault(); alert('Reflection saved!'); window.location.href = '/my-logs' }}>
          <div className="mb-6 lg:mb-8 p-4 sm:p-6 bg-[#faf8f5] border-l-4 border-[#7a8b7e]">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">You're reflecting on:</div>
            <div className="font-semibold text-[#1a2332] text-base sm:text-lg">ChatGPT for CS101 Grading</div>
            <div className="text-xs sm:text-sm text-[#7a8b7e] mt-1">Logged on Feb 1, 2026</div>
          </div>

          {/* Autonomy Rating */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 pb-3 lg:pb-4 border-b border-[#e8e3dc] text-[#1a2332]">Teaching Autonomy</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-4">
                How much control did you maintain over the teaching/learning process?
                <span className="block text-xs font-light text-[#3d4451] mt-1">
                  (1 = AI dominated decisions, 5 = I maintained full control)
                </span>
              </label>
              <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="autonomy"
                      value={rating}
                      required
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-xl sm:text-2xl font-serif text-[#3d4451]">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Ethical Score */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 pb-3 lg:pb-4 border-b border-[#e8e3dc] text-[#1a2332]">Ethical Considerations</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-4">
                How comfortable were you with the ethical implications?
                <span className="block text-xs font-light text-[#3d4451] mt-1">
                  (1 = Significant concerns, 5 = Fully comfortable)
                </span>
              </label>
              <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="ethics"
                      value={rating}
                      required
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-xl sm:text-2xl font-serif text-[#3d4451]">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Productivity Score */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 pb-3 lg:pb-4 border-b border-[#e8e3dc] text-[#1a2332]">Productivity Impact</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-4">
                How did AI affect your overall productivity?
                <span className="block text-xs font-light text-[#3d4451] mt-1">
                  (1 = Decreased productivity, 5 = Significantly increased)
                </span>
              </label>
              <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="flex flex-col items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="productivity"
                      value={rating}
                      required
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span className="text-xl sm:text-2xl font-serif text-[#3d4451]">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Qualitative Reflection */}
          <div className="mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 pb-3 lg:pb-4 border-b border-[#e8e3dc] text-[#1a2332]">Deeper Reflection</h2>
            
            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-2">
                What surprised you about using AI for this task?
              </label>
              <textarea
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base"
                placeholder="Reflect on unexpected outcomes, challenges, or insights..."
              ></textarea>
            </div>

            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-2">
                How might you adjust your AI usage in the future?
              </label>
              <textarea
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base"
                placeholder="Consider what you'd do differently next time..."
              ></textarea>
            </div>

            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-2">
                Additional Comments
              </label>
              <textarea
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base"
                placeholder="Any other thoughts or observations..."
              ></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 lg:pt-8 border-t border-[#e8e3dc]">
            <Link href="/my-logs" className="flex-1">
              <button type="button" className="w-full py-4 lg:py-5 bg-[#e8e3dc] text-[#1a2332] font-medium hover:bg-[#7a8b7e] hover:text-white transition text-sm sm:text-base">
                Skip Reflection
              </button>
            </Link>
            <button type="submit" className="flex-1 py-4 lg:py-5 bg-[#1a2332] text-[#faf8f5] font-medium hover:bg-[#c85a3e] transition text-sm sm:text-base">
              Save Reflection
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}