'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Loader from '@/app/components/Loader'
import { apiRequest, ApiError } from '@/app/lib/api'
import { useRequireAuth } from '@/app/lib/use-require-auth'
import type { DashboardSummary } from '@/app/lib/types'

export default function Dashboard() {
  const auth = useRequireAuth()
  const [data, setData] = useState<DashboardSummary | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!auth.token) {
      return
    }

    void apiRequest<DashboardSummary>('/dashboard/summary', { token: auth.token })
      .then(setData)
      .catch((err) => {
        setError(err instanceof ApiError ? err.message : 'Unable to load dashboard data.')
      })
  }, [auth.token])

  if (auth.isLoading || !auth.token) {
    return <Loader text="Loading dashboard..." className="min-h-screen" />
  }

  if (!data && !error) {
    return <Loader text="Loading dashboard..." className="min-h-screen" />
  }

  const stats = [
    { label: 'Tools Used', value: String(data?.stats.toolsUsed ?? 0), change: 'Unique AI tools logged this period' },
    { label: 'Net Hours Saved', value: String(data?.stats.totalNetHoursSaved ?? 0), change: 'Hours saved minus extra time spent' },
    { label: 'Total Logs', value: String(data?.stats.totalLogs ?? 0), change: 'Recorded usage entries' },
    { label: 'Avg Productivity', value: `${data?.stats.averageProductivity ?? 0}/5`, change: 'From completed reflections' },
  ]
  const todayLabel = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      {/* Sidebar */}
     <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-2">
            Welcome back, {data?.educator?.firstName ?? 'Educator'}
          </h1>
          <p className="text-[#3d4451] text-sm sm:text-base">{todayLabel}</p>
        </div>

        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 lg:p-8 border-l-4 border-[#e8e3dc] hover:border-[#c85a3e] transition">
              <div className="text-xs text-[#3d4451] uppercase tracking-wide mb-3 font-medium">{stat.label}</div>
              <div className="text-3xl lg:text-4xl font-serif mb-2 text-[#1a2332]">{stat.value}</div>
              <div className="text-sm font-medium text-[#7a8b7e]">
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6 text-[#1a2332]">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/log-usage">
              <div className="bg-[#1a2332] text-[#faf8f5] p-6 lg:p-8 hover:bg-[#c85a3e] transition cursor-pointer">
                <h3 className="text-lg lg:text-xl mb-2 font-medium">Log AI Usage</h3>
                <p className="text-sm opacity-90 font-light">Record a new teaching activity</p>
              </div>
            </Link>
            <Link href="/tools">
              <div className="bg-[#1a2332] text-[#faf8f5] p-6 lg:p-8 hover:bg-[#c85a3e] transition cursor-pointer">
                <h3 className="text-lg lg:text-xl mb-2 font-medium">Browse Tools</h3>
                <p className="text-sm opacity-90 font-light">Discover new AI resources</p>
              </div>
            </Link>
            <Link href="/reports">
              <div className="bg-[#1a2332] text-[#faf8f5] p-6 lg:p-8 hover:bg-[#c85a3e] transition cursor-pointer">
                <h3 className="text-lg lg:text-xl mb-2 font-medium">Generate Report</h3>
                <p className="text-sm opacity-90 font-light">Create a reflection summary</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6 text-[#1a2332]">Recent Activity</h2>
          {data?.recentActivity.length ? data.recentActivity.map((activity, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-4 lg:py-6 border-b border-[#e8e3dc] last:border-0 hover:pl-2 lg:hover:pl-4 transition-all gap-2 sm:gap-0">
              <div className="flex-1">
                <h4 className="font-medium text-[#1a2332] mb-2 text-sm sm:text-base">
                  Used {activity.toolName} for {activity.course} {activity.task.replace(/-/g, ' ')}
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm text-[#3d4451]">
                  <span>{activity.task.replace(/-/g, ' ')}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{activity.netHoursSaved.toFixed(1)} hours net saved</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-[#7a8b7e] sm:ml-4 shrink-0">
                {new Date(activity.usedAt).toLocaleDateString()}
              </div>
            </div>
          )) : (
            <div className="py-8 text-sm text-[#3d4451]">
              No usage logs yet. Start by logging your first AI teaching activity.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
