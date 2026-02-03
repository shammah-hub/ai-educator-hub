'use client'

import Chart from '@/app/components/Chart'
import Sidebar from '@/app/components/Sidebar'



export default function Insights() {
  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-2 lg:mb-3">Usage Insights</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Analytics and trends from your AI tool usage</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="bg-white p-5 lg:p-6 border-l-4 border-emerald-500 hover:shadow-lg transition">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">Total Hours Saved</div>
            <div className="text-3xl lg:text-4xl font-serif font-semibold text-emerald-600 mb-1">24.5</div>
            <div className="text-xs text-[#7a8b7e]">This month</div>
          </div>
          <div className="bg-white p-5 lg:p-6 border-l-4 border-[#c85a3e] hover:shadow-lg transition">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">Most Used Tool</div>
            <div className="text-2xl lg:text-3xl font-serif font-semibold text-[#1a2332] mb-1">ChatGPT</div>
            <div className="text-xs text-[#7a8b7e]">15 logs</div>
          </div>
          <div className="bg-white p-5 lg:p-6 border-l-4 border-[#7a8b7e] hover:shadow-lg transition">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">Top Task</div>
            <div className="text-2xl lg:text-3xl font-serif font-semibold text-[#1a2332] mb-1">Grading</div>
            <div className="text-xs text-[#7a8b7e]">40% of usage</div>
          </div>
          <div className="bg-white p-5 lg:p-6 border-l-4 border-amber-500 hover:shadow-lg transition">
            <div className="text-xs sm:text-sm text-[#3d4451] mb-2">Avg Impact</div>
            <div className="text-3xl lg:text-4xl font-serif font-semibold text-amber-600 mb-1">4.2/5</div>
            <div className="text-xs text-[#7a8b7e]">Productivity score</div>
          </div>
        </div>

        {/* Time Saved Over Time */}
        <div className="bg-white p-5 sm:p-6 lg:p-8 mb-6 lg:mb-8 rounded-lg border border-[#e8e3dc]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h2 className="text-2xl lg:text-3xl font-serif text-[#1a2332]">Hours Saved Over Time</h2>
            <select className="px-4 py-2 border border-[#e8e3dc] rounded focus:outline-none focus:border-[#7a8b7e] text-sm">
              <option>Last 8 weeks</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>This year</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <Chart 
              data={[5, 8, 6, 10, 7, 12, 9, 11]} 
              labels={['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']}
              color="#7a8b7e"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Tools Usage Breakdown */}
          <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-lg border border-[#e8e3dc]">
            <h2 className="text-2xl lg:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Most Used Tools</h2>
            {[
              { name: 'ChatGPT', count: 15, percent: 40, color: '#c85a3e' },
              { name: 'Grammarly', count: 12, percent: 32, color: '#7a8b7e' },
              { name: 'Perplexity AI', count: 8, percent: 21, color: '#10b981' },
              { name: 'Notion AI', count: 3, percent: 7, color: '#f59e0b' }
            ].map((tool, i) => (
              <div key={i} className="mb-6 lg:mb-8 last:mb-0">
                <div className="flex justify-between mb-2 lg:mb-3">
                  <span className="font-semibold text-[#1a2332] text-base lg:text-lg">{tool.name}</span>
                  <div className="text-right">
                    <span className="text-[#3d4451] font-medium text-sm lg:text-base">{tool.count} logs</span>
                    <span className="text-[#7a8b7e] text-xs lg:text-sm ml-2">({tool.percent}%)</span>
                  </div>
                </div>
                <div className="w-full bg-[#e8e3dc] h-2 lg:h-3 rounded-full overflow-hidden">
                  <div 
                    className="h-2 lg:h-3 transition-all duration-500 rounded-full" 
                    style={{ width: `${tool.percent}%`, backgroundColor: tool.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Workload Impact */}
          <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-lg border border-[#e8e3dc]">
            <h2 className="text-2xl lg:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Workload Impact</h2>
            <div className="flex items-center justify-center h-40 sm:h-48 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg mb-4 lg:mb-6">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-serif text-emerald-600 mb-2">85%</div>
                <div className="text-[#1a2332] font-medium text-base lg:text-lg">Positive Impact</div>
                <div className="text-xs sm:text-sm text-[#3d4451] mt-2">Based on 47 logs</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              <div className="text-center p-3 lg:p-5 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="text-2xl lg:text-3xl font-serif text-emerald-600 mb-1 lg:mb-2">40</div>
                <div className="text-[10px] lg:text-xs font-semibold text-emerald-700 uppercase tracking-wide">Positive</div>
              </div>
              <div className="text-center p-3 lg:p-5 bg-amber-50 rounded-lg border border-amber-200">
                <div className="text-2xl lg:text-3xl font-serif text-amber-600 mb-1 lg:mb-2">5</div>
                <div className="text-[10px] lg:text-xs font-semibold text-amber-700 uppercase tracking-wide">Neutral</div>
              </div>
              <div className="text-center p-3 lg:p-5 bg-rose-50 rounded-lg border border-rose-200">
                <div className="text-2xl lg:text-3xl font-serif text-rose-600 mb-1 lg:mb-2">2</div>
                <div className="text-[10px] lg:text-xs font-semibold text-rose-700 uppercase tracking-wide">Negative</div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Breakdown */}
        <div className="bg-white p-5 sm:p-6 lg:p-8 mb-6 lg:mb-8 rounded-lg border border-[#e8e3dc]">
          <h2 className="text-2xl lg:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Tasks Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[
              { task: 'Grading', count: 19, color: 'emerald' },
              { task: 'Content Creation', count: 12, color: 'blue' },
              { task: 'Feedback', count: 10, color: 'purple' },
              { task: 'Lesson Planning', count: 6, color: 'amber' }
            ].map((item, i) => (
              <div key={i} className="p-4 lg:p-6 bg-[#faf8f5] rounded-lg hover:bg-[#e8e3dc] transition text-center border border-[#e8e3dc]">
                <div className="text-xl lg:text-2xl font-serif font-semibold text-[#1a2332] mb-1">{item.count}</div>
                <div className="text-xs lg:text-sm text-[#3d4451]">{item.task}</div>
                <div className="mt-3 h-2 bg-[#e8e3dc] rounded-full">
                  <div className={`h-2 rounded-full bg-${item.color}-500`} style={{ width: `${(item.count / 19) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Comparison */}
        <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3342] text-[#faf8f5] p-6 sm:p-8 lg:p-10 rounded-lg">
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-[#7a8b7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h2 className="text-2xl lg:text-3xl font-serif">Peer Comparison</h2>
          </div>
          <p className="mb-6 lg:mb-8 opacity-90 text-sm lg:text-lg">Compare your usage with anonymized data from educators in similar roles</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
            <div className="bg-white/10 p-5 lg:p-6 rounded-lg backdrop-blur-sm">
              <div className="text-xs lg:text-sm opacity-75 mb-2">Your Hours Saved</div>
              <div className="text-4xl lg:text-5xl font-serif mb-1">24.5</div>
              <div className="text-xs lg:text-sm opacity-75">hrs this month</div>
            </div>
            <div className="bg-white/10 p-5 lg:p-6 rounded-lg backdrop-blur-sm">
              <div className="text-xs lg:text-sm opacity-75 mb-2">Peer Average</div>
              <div className="text-4xl lg:text-5xl font-serif mb-1">18.2</div>
              <div className="text-xs lg:text-sm opacity-75">hrs this month</div>
            </div>
            <div className="bg-emerald-500/20 p-5 lg:p-6 rounded-lg border-2 border-emerald-500/50">
              <div className="text-xs lg:text-sm opacity-75 mb-2">Your Performance</div>
              <div className="text-4xl lg:text-5xl font-serif text-emerald-400 mb-1">+35%</div>
              <div className="text-xs lg:text-sm text-emerald-300">Above average</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}