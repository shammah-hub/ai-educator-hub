'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'


export default function MyLogs() {
  const logs = [
    { tool: 'ChatGPT', course: 'CS101', task: 'Grading', impact: 'Positive', time: '+2.5h', date: 'Feb 1, 2026', reflection: 'Significantly reduced grading time while maintaining quality feedback.' },
    { tool: 'Perplexity AI', course: 'Research Methods', task: 'Content Generation', impact: 'Positive', time: '+1.0h', date: 'Jan 31, 2026', reflection: 'Helped create engaging reading materials for students.' },
    { tool: 'Grammarly', course: 'Writing 201', task: 'Feedback', impact: 'Positive', time: '+3.0h', date: 'Jan 28, 2026', reflection: 'Streamlined feedback process on student essays.' },
    { tool: 'Notion AI', course: 'Data Science 101', task: 'Lesson Planning', impact: 'Neutral', time: '+0.5h', date: 'Jan 25, 2026', reflection: 'Helped organize ideas but required significant editing.' },
    { tool: 'Claude', course: 'Philosophy 301', task: 'Discussion Prompts', impact: 'Negative', time: '-0.5h', date: 'Jan 20, 2026', reflection: 'Generated prompts were too generic for advanced students.' }
  ]

  const getImpactStyle = (impact: string) => {
    switch(impact) {
      case 'Positive':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      case 'Neutral':
        return 'bg-amber-50 text-amber-700 border border-amber-200'
      case 'Negative':
        return 'bg-rose-50 text-rose-700 border border-rose-200'
      default:
        return 'bg-gray-50 text-gray-700 border border-gray-200'
    }
  }

  const getTimeStyle = (time: string) => {
    if (time.startsWith('+')) return 'text-emerald-600'
    if (time.startsWith('-')) return 'text-rose-600'
    return 'text-[#3d4451]'
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 lg:mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-2 lg:mb-3">My Usage Logs</h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Track and reflect on your AI tool usage</p>
          </div>
          <Link href="/log-usage">
            <button className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-[#c85a3e] text-white hover:bg-[#d66a4f] transition shadow-lg hover:shadow-xl whitespace-nowrap">
              + New Log Entry
            </button>
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white p-4 sm:p-5 lg:p-6 border-l-4 border-emerald-500">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-1">Total Time Saved</div>
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-600">+6.5h</div>
          </div>
          <div className="bg-white p-4 sm:p-5 lg:p-6 border-l-4 border-[#c85a3e]">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-1">Total Logs</div>
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#1a2332]">{logs.length}</div>
          </div>
          <div className="bg-white p-4 sm:p-5 lg:p-6 border-l-4 border-emerald-500">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-1">Positive Impact</div>
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-600">60%</div>
          </div>
          <div className="bg-white p-4 sm:p-5 lg:p-6 border-l-4 border-[#7a8b7e]">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-1">Tools Used</div>
            <div className="text-2xl sm:text-3xl font-serif font-semibold text-[#1a2332]">5</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 lg:mb-8">
          <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-2 focus:ring-[#7a8b7e]/20 transition rounded text-sm sm:text-base">
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>Last 3 Months</option>
          </select>
          <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-2 focus:ring-[#7a8b7e]/20 transition rounded text-sm sm:text-base">
            <option>All Tools</option>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Grammarly</option>
            <option>Perplexity AI</option>
          </select>
          <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-2 focus:ring-[#7a8b7e]/20 transition rounded text-sm sm:text-base">
            <option>All Tasks</option>
            <option>Grading</option>
            <option>Feedback</option>
            <option>Content Generation</option>
            <option>Lesson Planning</option>
          </select>
          <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] focus:ring-2 focus:ring-[#7a8b7e]/20 transition rounded text-sm sm:text-base">
            <option>All Impacts</option>
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </select>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {logs.map((log, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-[#e8e3dc]">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-semibold text-[#1a2332] text-lg mb-1">{log.tool}</div>
                  <div className="text-sm text-[#7a8b7e]">{log.course}</div>
                </div>
                <div className={`text-2xl font-serif font-semibold ${getTimeStyle(log.time)}`}>
                  {log.time}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1.5 bg-[#e8e3dc] text-xs rounded-full font-medium text-[#1a2332]">
                  {log.task}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getImpactStyle(log.impact)}`}>
                    {log.impact}
                  </span>
                  {log.impact === 'Positive' && (
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {log.impact === 'Neutral' && (
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  {log.impact === 'Negative' && (
                    <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="text-sm text-[#3d4451] mb-3">{log.date}</div>

              <div className="flex gap-2 pt-3 border-t border-[#e8e3dc]">
                <button className="flex-1 py-2 bg-[#e8e3dc] hover:bg-[#7a8b7e] hover:text-white transition rounded text-sm">
                  View Details
                </button>
                <button className="flex-1 py-2 bg-[#e8e3dc] hover:bg-[#c85a3e] hover:text-white transition rounded text-sm">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#1a2332] text-[#faf8f5]">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Tool & Course</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Task</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Impact</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Time Saved</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Date</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wide font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i} className="border-b border-[#e8e3dc] hover:bg-[#faf8f5] transition group">
                    <td className="px-6 py-5">
                      <div className="font-semibold text-[#1a2332] mb-1">{log.tool}</div>
                      <div className="text-sm text-[#7a8b7e]">{log.course}</div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1.5 bg-[#e8e3dc] text-xs rounded-full font-medium text-[#1a2332]">
                        {log.task}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1.5 text-xs font-semibold rounded-full ${getImpactStyle(log.impact)}`}>
                          {log.impact}
                        </span>
                        {log.impact === 'Positive' && (
                          <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {log.impact === 'Neutral' && (
                          <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                        {log.impact === 'Negative' && (
                          <svg className="w-4 h-4 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className={`text-2xl font-serif font-semibold ${getTimeStyle(log.time)}`}>
                        {log.time}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-[#3d4451]">{log.date}</td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <button className="p-2 bg-[#e8e3dc] hover:bg-[#7a8b7e] hover:text-white transition rounded group-hover:scale-105" title="View Details">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>
                        <button className="p-2 bg-[#e8e3dc] hover:bg-[#c85a3e] hover:text-white transition rounded group-hover:scale-105" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 lg:mt-8">
          <div className="text-sm text-[#3d4451] text-center sm:text-left">
            Showing <span className="font-semibold">1-5</span> of <span className="font-semibold">5</span> logs
          </div>
          <div className="flex gap-2 justify-center sm:justify-start">
            <button className="px-3 sm:px-4 py-2 border border-[#e8e3dc] bg-white hover:bg-[#faf8f5] transition rounded disabled:opacity-50 text-sm" disabled>
              Previous
            </button>
            <button className="px-3 sm:px-4 py-2 bg-[#1a2332] text-white rounded text-sm">1</button>
            <button className="px-3 sm:px-4 py-2 border border-[#e8e3dc] bg-white hover:bg-[#faf8f5] transition rounded disabled:opacity-50 text-sm" disabled>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}