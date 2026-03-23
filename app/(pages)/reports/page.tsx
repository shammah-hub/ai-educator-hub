'use client'

import Loader from "@/app/components/Loader"
import Sidebar from "@/app/components/Sidebar"
import { useCallback, useEffect, useState } from "react"
import { apiRequest, ApiError } from "@/app/lib/api"
import { useRequireAuth } from "@/app/lib/use-require-auth"
import type { Report } from "@/app/lib/types"

export default function Reports() {
  const auth = useRequireAuth()
  const [reports, setReports] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    reportType: 'personal-reflection',
    startDate: '',
    endDate: new Date().toISOString().slice(0, 10),
    includeSections: [
      'Usage Statistics',
      'Tool Breakdown',
      'Workload Impact Analysis',
      'Ethical Reflections',
      'Productivity Metrics',
      'Peer Comparison',
    ],
    format: 'pdf',
  })

  const loadReports = useCallback(async () => {
    if (!auth.token) {
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await apiRequest<{ items: Report[] }>('/reports', { token: auth.token })
      setReports(response.items)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to load reports.')
    } finally {
      setIsLoading(false)
    }
  }, [auth.token])

  useEffect(() => {
    if (!auth.token) {
      return
    }

    void loadReports()
  }, [auth.token, loadReports])

  const toggleSection = (section: string) => {
    setFormData((current) => ({
      ...current,
      includeSections: current.includeSections.includes(section)
        ? current.includeSections.filter((item) => item !== section)
        : [...current.includeSections, section],
    }))
  }

  const handleGenerateReport = async () => {
    if (!auth.token || !formData.startDate || !formData.endDate) {
      setError('Select both a start date and an end date.')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      await apiRequest('/reports', {
        method: 'POST',
        token: auth.token,
        body: JSON.stringify(formData),
      })
      await loadReports()
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Unable to generate report.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (auth.isLoading || !auth.token || (isLoading && !reports.length && !error)) {
    return <Loader text="Loading reports..." className="min-h-screen" />
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Generate Report</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Create a comprehensive summary of your AI usage and reflections</p>
        </div>

        {error && (
          <div className="mb-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Report Generator */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Report Settings</h2>
          
          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-2">Report Type</label>
            <select value={formData.reportType} onChange={(e) => setFormData((current) => ({ ...current, reportType: e.target.value }))} className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base">
              <option value="personal-reflection">Personal Reflection Report</option>
              <option value="institutional-summary">Institutional Summary</option>
              <option value="research-data-export">Research Data Export</option>
            </select>
          </div>

          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-4">Date Range</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-xs text-[#3d4451] mb-2">Start Date</label>
                <input type="date" value={formData.startDate} onChange={(e) => setFormData((current) => ({ ...current, startDate: e.target.value }))} className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs text-[#3d4451] mb-2">End Date</label>
                <input type="date" value={formData.endDate} onChange={(e) => setFormData((current) => ({ ...current, endDate: e.target.value }))} className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" />
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-4">Include Sections</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {[
                'Usage Statistics',
                'Tool Breakdown',
                'Workload Impact Analysis',
                'Ethical Reflections',
                'Productivity Metrics',
                'Peer Comparison'
              ].map((section) => (
                <label key={section} className="flex items-center gap-2 text-sm sm:text-base">
                  <input type="checkbox" checked={formData.includeSections.includes(section)} onChange={() => toggleSection(section)} className="w-4 h-4" />
                  <span>{section}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-2">Export Format</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="pdf" checked={formData.format === 'pdf'} onChange={(e) => setFormData((current) => ({ ...current, format: e.target.value }))} className="w-4 h-4" />
                <span>PDF</span>
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="docx" checked={formData.format === 'docx'} onChange={(e) => setFormData((current) => ({ ...current, format: e.target.value }))} className="w-4 h-4" />
                <span>Word Document</span>
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="csv" checked={formData.format === 'csv'} onChange={(e) => setFormData((current) => ({ ...current, format: e.target.value }))} className="w-4 h-4" />
                <span>CSV Data</span>
              </label>
            </div>
          </div>

          <button className="w-full py-4 lg:py-5 bg-[#c85a3e] text-white text-base lg:text-lg hover:bg-[#d66a4f] transition disabled:opacity-60" onClick={handleGenerateReport} disabled={isSubmitting}>
            {isSubmitting ? 'Generating...' : 'Generate Report'}
          </button>
        </div>

        {/* Recent Reports */}
        <div className="mt-8 lg:mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6 text-[#1a2332]">Recent Reports</h2>
          <div className="bg-white p-4 sm:p-6 lg:p-8">
            {reports.map((report, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 lg:py-6 border-b border-[#e8e3dc] last:border-0 hover:bg-[#faf8f5] px-2 sm:px-4 transition gap-4 sm:gap-0">
                <div className="flex items-center gap-3 lg:gap-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#c85a3e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div className="min-w-0">
                    <div className="font-medium text-[#1a2332] mb-1 text-sm sm:text-base truncate">{report.title}</div>
                    <div className="text-xs sm:text-sm text-[#3d4451]">
                      {new Date(report.generatedAt).toLocaleDateString()} • {report.format.toUpperCase()} • {report.summary.totalLogs} logs
                    </div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-[#3d4451] w-full sm:w-auto text-right">
                  {report.summary.totalNetHoursSaved} hrs saved
                </div>
              </div>
            ))}
            {!reports.length && (
              <div className="py-6 text-sm text-[#3d4451]">
                No reports yet. Generate your first summary above.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
