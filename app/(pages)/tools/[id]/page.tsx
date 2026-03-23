'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, Star, Clock, AlertCircle, TrendingUp, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import Sidebar from '@/app/components/Sidebar'
import Loader from '@/app/components/Loader'
import { apiRequest, ApiError } from '@/app/lib/api'
import { useRequireAuth } from '@/app/lib/use-require-auth'
import type { Tool } from '@/app/lib/types'

export default function ToolDetailPage() {
  const auth = useRequireAuth()
  const params = useParams<{ id: string }>()
  const [tool, setTool] = useState<Tool | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!auth.token || !params.id) {
      return
    }

    void apiRequest<Tool>(`/tools/${params.id}`, { token: auth.token })
      .then(setTool)
      .catch((err) => {
        setError(err instanceof ApiError ? err.message : 'Unable to load tool details.')
      })
  }, [auth.token, params.id])

  if (auth.isLoading || !auth.token || (!tool && !error)) {
    return <Loader text="Loading tool details..." className="min-h-screen" />
  }

  if (!tool) {
    return (
      <div className="min-h-screen bg-[#faf8f5] p-8 text-[#1a2332]">
        <p className="text-sm text-red-700">{error || 'Tool not found.'}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:ml-72 lg:px-8">
        <Link href="/tools" className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900 sm:mb-6 sm:text-base">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
        
        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:mb-6 sm:p-6 lg:p-8">
          <div className="mb-4 flex flex-col sm:mb-6">
            <div className="flex-1">
              <h1 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-2 sm:text-3xl">{tool.name}</h1>
              <div className="mb-3 flex flex-wrap items-center gap-3 sm:mb-4 sm:gap-4">
                <span className="rounded-full bg-[#e8e3dc] px-3 py-1 text-xs text-[#1a2332] sm:text-sm">
                  {tool.pricingModel}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 sm:h-5 sm:w-5" />
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">{tool.stats.rating}</span>
                  <span className="text-xs text-gray-500 sm:text-sm">({tool.stats.totalUsers} users)</span>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-600 sm:text-base">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.categories.map((cat, index) => (
                  <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 sm:text-sm">
                    {cat.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1a2332] px-4 py-3 text-sm text-white transition hover:bg-[#c85a3e] sm:text-base"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </a>
            <Link href={`/log-usage?tool=${tool.id}`} className="border border-[#1a2332] px-4 py-3 text-center text-sm text-[#1a2332] transition hover:bg-[#1a2332] hover:text-white sm:text-base">
              Log Usage
            </Link>
          </div>
        </div>
        
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mb-6 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs text-gray-600 sm:text-sm">Avg. Time Saved</p>
                <p className="text-xl font-bold text-green-600 sm:text-2xl">{tool.stats.avgTimeSaved} hrs</p>
                <p className="mt-1 text-xs text-gray-500">per week</p>
              </div>
              <div className="rounded-lg bg-green-50 p-2 sm:p-3">
                <Clock className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs text-gray-600 sm:text-sm">Community Users</p>
                <p className="text-xl font-bold text-[#1a2332] sm:text-2xl">{tool.stats.totalUsers}</p>
                <p className="mt-1 text-xs text-gray-500">educators</p>
              </div>
              <div className="rounded-lg bg-[#e8e3dc] p-2 sm:p-3">
                <Users className="h-5 w-5 text-[#1a2332] sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-4 shadow-sm sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs text-gray-600 sm:text-sm">Most Used For</p>
                <p className="text-xl font-bold text-purple-600 sm:text-2xl">{tool.stats.mostUsedFor || 'General use'}</p>
                <p className="mt-1 text-xs text-gray-500">{tool.stats.primaryUsers || 'Educators'}</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-2 sm:p-3">
                <TrendingUp className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="space-y-4 sm:space-y-6 lg:col-span-2">
            <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">Common Use Cases</h2>
              <div className="space-y-3 sm:space-y-4">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="border-l-4 border-[#c85a3e] py-2 pl-3 sm:pl-4">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">{useCase.title}</h3>
                    <p className="mb-2 text-xs text-gray-600 sm:text-sm">{useCase.description}</p>
                    <p className="text-xs font-medium text-green-600">
                      Typical time saved: {useCase.timeSaved}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 shadow-sm sm:p-6">
              <div className="mb-3 flex items-start space-x-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600 sm:h-5 sm:w-5" />
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">Ethical Considerations</h3>
              </div>
              <ul className="space-y-2">
                {tool.ethicalNotes.map((note, index) => (
                  <li key={index} className="flex items-start text-xs text-gray-700 sm:text-sm">
                    <span className="mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 sm:text-base">Quick Stats</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Most used for:</span>
                  <span className="font-medium text-gray-900">{tool.stats.mostUsedFor || 'General use'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary users:</span>
                  <span className="font-medium text-gray-900">{tool.stats.primaryUsers || 'Educators'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Added on:</span>
                  <span className="font-medium text-gray-900">{new Date(tool.addedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
