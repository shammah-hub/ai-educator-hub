'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import Loader from '@/app/components/Loader'
import { apiRequest, ApiError } from '@/app/lib/api'
import { useRequireAuth } from '@/app/lib/use-require-auth'
import type { Tool } from '@/app/lib/types'

export default function Tools() {
  const auth = useRequireAuth()
  const [allTools, setAllTools] = useState<Tool[]>([])
  const [tools, setTools] = useState<Tool[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [pricingModel, setPricingModel] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!auth.token) {
      return
    }

    void apiRequest<{ items: Tool[] }>('/tools', { token: auth.token })
      .then((response) => {
        setAllTools(response.items)
      })
      .catch(() => {})
  }, [auth.token])

  useEffect(() => {
    if (!auth.token) {
      return
    }

    const query = new URLSearchParams()

    if (search.trim()) {
      query.set('search', search.trim())
    }
    if (category) {
      query.set('category', category)
    }
    if (pricingModel) {
      query.set('pricingModel', pricingModel)
    }

    void apiRequest<{ items: Tool[] }>(`/tools${query.toString() ? `?${query.toString()}` : ''}`, {
      token: auth.token,
    })
      .then((response) => {
        setTools(response.items)
      })
      .catch((err) => {
        setError(err instanceof ApiError ? err.message : 'Unable to load tools.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [auth.token, search, category, pricingModel])

  const categories = useMemo(
    () =>
      Array.from(new Set(allTools.flatMap((tool) => tool.categories))).sort((a, b) => a.localeCompare(b)),
    [allTools],
  )

  if (auth.isLoading || !auth.token) {
    return <Loader text="Loading tools..." className="min-h-screen" />
  }

  const formatPrice = (value: Tool['pricingModel']) =>
    value.charAt(0).toUpperCase() + value.slice(1)

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />
      
      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">AI Tools Directory</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Discover and explore AI tools curated for educators</p>
        </div>

        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="flex-1 relative">
            <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#3d4451]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search tools..." value={search} onChange={(e) => { setIsLoading(true); setSearch(e.target.value) }} className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" />
          </div>
          <select value={category} onChange={(e) => { setIsLoading(true); setCategory(e.target.value) }} className="px-3 sm:px-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none text-sm sm:text-base">
            <option value="">All Categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item.replace(/-/g, ' ')}
              </option>
            ))}
          </select>
          <select value={pricingModel} onChange={(e) => { setIsLoading(true); setPricingModel(e.target.value) }} className="px-3 sm:px-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none text-sm sm:text-base">
            <option value="">All Pricing</option>
            <option value="free">Free</option>
            <option value="freemium">Freemium</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {/* Tools Grid */}
        {isLoading ? (
          <Loader text="Loading tools..." />
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 border-t-4 border-[#e8e3dc] hover:border-[#c85a3e] transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1a2332]">{tool.name}</h3>
                <span className={`text-xs px-2 sm:px-3 py-1 shrink-0 ml-2 ${tool.pricingModel === 'free' ? 'bg-[#7a8b7e] text-white' : 'bg-[#e8e3dc] text-[#1a2332]'}`}>
                  {formatPrice(tool.pricingModel)}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap mb-3 sm:mb-4">
                {tool.categories.map((cat, j) => (
                  <span key={j} className="text-xs px-2 sm:px-3 py-1 bg-[#faf8f5] text-[#3d4451]">{cat}</span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed mb-4 sm:mb-6">{tool.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link href={`/log-usage?tool=${tool.id}`} className="flex-1">
                  <button className="w-full px-4 py-2 sm:py-3 bg-[#1a2332] text-white text-xs sm:text-sm hover:bg-[#c85a3e] transition">
                    Log Usage
                  </button>
                </Link>
                <Link href={`/tools/${tool.slug}`} className="flex-1">
                  <button className="w-full px-4 py-2 sm:py-3 bg-[#e8e3dc] text-[#1a2332] text-xs sm:text-sm hover:bg-[#7a8b7e] hover:text-white transition">
                    View Details
                  </button>
                </Link>
              </div>
              {tool.ethicalNotes[0] && (
                <div className="bg-[#c85a3e]/10 p-3 sm:p-4 border-l-2 border-[#c85a3e] text-xs sm:text-sm text-[#3d4451]">
                  {tool.ethicalNotes[0]}
                </div>
              )}
            </div>
          ))}
          {!tools.length && (
            <div className="col-span-full border border-dashed border-[#e8e3dc] bg-white px-6 py-10 text-center text-sm text-[#3d4451]">
              No tools matched the current filters.
            </div>
          )}
        </div>
        )}
      </main>
    </div>
  )
}
