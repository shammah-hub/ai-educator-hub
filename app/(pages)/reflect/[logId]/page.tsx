'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from '@/app/components/Loader'
import { apiRequest, ApiError } from '@/app/lib/api'
import { useRequireAuth } from '@/app/lib/use-require-auth'
import type { Reflection, UsageLog } from '@/app/lib/types'

export default function Reflect() {
  const auth = useRequireAuth()
  const router = useRouter()
  const params = useParams<{ logId: string }>()
  const logId = params.logId
  const [log, setLog] = useState<UsageLog | null>(null)
  const [formData, setFormData] = useState({
    autonomyRating: '',
    ethicsRating: '',
    productivityRating: '',
    surprises: '',
    futureAdjustments: '',
    additionalComments: '',
  })
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!auth.token || !logId) {
      return
    }

    setIsLoading(true)
    setError('')

    Promise.all([
      apiRequest<UsageLog>(`/usage-logs/${logId}`, { token: auth.token }),
      apiRequest<Reflection | null>(`/usage-logs/${logId}/reflection`, { token: auth.token }),
    ])
      .then(([logResponse, reflectionResponse]) => {
        setLog(logResponse)

        if (reflectionResponse) {
          setFormData({
            autonomyRating: String(reflectionResponse.autonomyRating),
            ethicsRating: String(reflectionResponse.ethicsRating),
            productivityRating: String(reflectionResponse.productivityRating),
            surprises: reflectionResponse.surprises,
            futureAdjustments: reflectionResponse.futureAdjustments,
            additionalComments: reflectionResponse.additionalComments,
          })
        }
      })
      .catch((err) => {
        setError(err instanceof ApiError ? err.message : 'Unable to load reflection data.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [auth.token, logId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auth.token || !logId) {
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      await apiRequest(`/usage-logs/${logId}/reflection`, {
        method: 'PUT',
        token: auth.token,
        body: JSON.stringify({
          autonomyRating: Number(formData.autonomyRating),
          ethicsRating: Number(formData.ethicsRating),
          productivityRating: Number(formData.productivityRating),
          surprises: formData.surprises,
          futureAdjustments: formData.futureAdjustments,
          additionalComments: formData.additionalComments,
        }),
      })

      router.push('/my-logs')
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to save reflection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (auth.isLoading || !auth.token || isLoading) {
    return <Loader text="Loading reflection..." className="min-h-screen" />
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12 max-w-5xl">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Reflection</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Reflect on your AI usage experience</p>
        </div>

        <form className="bg-white p-6 sm:p-8 lg:p-12" onSubmit={handleSubmit}>
          <div className="mb-6 lg:mb-8 p-4 sm:p-6 bg-[#faf8f5] border-l-4 border-[#7a8b7e]">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">You&apos;re reflecting on:</div>
            <div className="font-semibold text-[#1a2332] text-base sm:text-lg">
              {log ? `${log.tool.name} for ${log.course} ${log.task.replace(/-/g, ' ')}` : 'Usage log'}
            </div>
            <div className="text-xs sm:text-sm text-[#7a8b7e] mt-1">
              {log ? `Logged on ${new Date(log.usedAt).toLocaleDateString()}` : ''}
            </div>
          </div>

          {error && (
            <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

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
                      checked={formData.autonomyRating === String(rating)}
                      onChange={(e) => setFormData((current) => ({ ...current, autonomyRating: e.target.value }))}
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
                      checked={formData.ethicsRating === String(rating)}
                      onChange={(e) => setFormData((current) => ({ ...current, ethicsRating: e.target.value }))}
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
                      checked={formData.productivityRating === String(rating)}
                      onChange={(e) => setFormData((current) => ({ ...current, productivityRating: e.target.value }))}
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
                value={formData.surprises}
                onChange={(e) => setFormData((current) => ({ ...current, surprises: e.target.value }))}
              ></textarea>
            </div>

            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-2">
                How might you adjust your AI usage in the future?
              </label>
              <textarea
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base"
                placeholder="Consider what you'd do differently next time..."
                value={formData.futureAdjustments}
                onChange={(e) => setFormData((current) => ({ ...current, futureAdjustments: e.target.value }))}
              ></textarea>
            </div>

            <div className="mb-5 lg:mb-6">
              <label className="block text-sm font-medium text-[#1a2332] mb-2">
                Additional Comments
              </label>
              <textarea
                className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] focus:ring-4 focus:ring-[#7a8b7e]/10 min-h-32 text-sm sm:text-base"
                placeholder="Any other thoughts or observations..."
                value={formData.additionalComments}
                onChange={(e) => setFormData((current) => ({ ...current, additionalComments: e.target.value }))}
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
            <button type="submit" disabled={isSubmitting} className="flex-1 py-4 lg:py-5 bg-[#1a2332] text-[#faf8f5] font-medium hover:bg-[#c85a3e] transition text-sm sm:text-base disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? 'Saving...' : 'Save Reflection'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
