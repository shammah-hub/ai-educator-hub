'use client'

import Loader from "@/app/components/Loader"
import Sidebar from "@/app/components/Sidebar"
import { useEffect, useState } from "react"
import { apiRequest, ApiError } from "@/app/lib/api"
import { useRequireAuth } from "@/app/lib/use-require-auth"
import type { ResourcesContent } from "@/app/lib/types"

export default function Resources() {
  const auth = useRequireAuth()
  const [data, setData] = useState<ResourcesContent | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!auth.token) {
      return
    }

    void apiRequest<ResourcesContent>('/resources/content', { token: auth.token })
      .then(setData)
      .catch((err) => {
        setError(err instanceof ApiError ? err.message : 'Unable to load resources.')
      })
  }, [auth.token])

  if (auth.isLoading || !auth.token || (!data && !error)) {
    return <Loader text="Loading resources..." className="min-h-screen" />
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12 max-w-5xl">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Resources & Guidelines</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Best practices and ethical frameworks for AI in education</p>
        </div>

        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Ethical Guidelines */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Ethical AI Integration Principles</h2>
          
          <div className="space-y-6 lg:space-y-8">
            {data?.guidelines.map((guideline, index) => (
              <div key={guideline.title}>
                <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">
                  {index + 1}. {guideline.title}
                </h3>
                <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                  {guideline.description}
                </p>
                <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                  <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong>{' '}
                  <span className="text-sm sm:text-base text-[#3d4451]">{guideline.bestPractice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-[#1a2332] text-[#faf8f5] p-6 sm:p-8 lg:p-12 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6">Recommended Reading</h2>
          <div className="space-y-3 lg:space-y-4">
            {data?.resources.map((resource, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 lg:py-4 border-b border-white/10 last:border-0 gap-3 sm:gap-0">
                <div className="min-w-0">
                  <div className="font-medium mb-1 text-sm sm:text-base">{resource.title}</div>
                  <div className="text-xs sm:text-sm opacity-75">{resource.type}</div>
                </div>
                <a href={resource.url} target="_blank" rel="noreferrer" className="px-4 sm:px-6 py-2 border border-[#faf8f5] hover:bg-[#faf8f5] hover:text-[#1a2332] transition text-sm sm:text-base w-full sm:w-auto flex-shrink-0 text-center">
                  Access
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Frequently Asked Questions</h2>
          <div className="space-y-4 lg:space-y-6">
            {data?.faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#e8e3dc] pb-4 lg:pb-6 last:border-0">
                <h3 className="text-base sm:text-lg font-semibold text-[#1a2332] mb-2 lg:mb-3">{faq.question}</h3>
                <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
