'use client'

import Sidebar from "@/app/components/Sidebar"


export default function Reports() {
  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Generate Report</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Create a comprehensive summary of your AI usage and reflections</p>
        </div>

        {/* Report Generator */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Report Settings</h2>
          
          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-2">Report Type</label>
            <select className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base">
              <option>Personal Reflection Report</option>
              <option>Institutional Summary</option>
              <option>Research Data Export</option>
            </select>
          </div>

          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-4">Date Range</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-xs text-[#3d4451] mb-2">Start Date</label>
                <input type="date" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-xs text-[#3d4451] mb-2">End Date</label>
                <input type="date" className="w-full px-4 py-3 lg:py-4 border border-[#e8e3dc] bg-[#faf8f5] focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" defaultValue="2026-02-01" />
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
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span>{section}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 lg:mb-8">
            <label className="block text-sm font-medium text-[#1a2332] mb-2">Export Format</label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="pdf" defaultChecked className="w-4 h-4" />
                <span>PDF</span>
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="docx" className="w-4 h-4" />
                <span>Word Document</span>
              </label>
              <label className="flex items-center gap-2 text-sm sm:text-base">
                <input type="radio" name="format" value="csv" className="w-4 h-4" />
                <span>CSV Data</span>
              </label>
            </div>
          </div>

          <button className="w-full py-4 lg:py-5 bg-[#c85a3e] text-white text-base lg:text-lg hover:bg-[#d66a4f] transition" onClick={() => alert('Report generated successfully!')}>
            Generate Report
          </button>
        </div>

        {/* Recent Reports */}
        <div className="mt-8 lg:mt-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6 text-[#1a2332]">Recent Reports</h2>
          <div className="bg-white p-4 sm:p-6 lg:p-8">
            {[
              { title: 'January 2026 Reflection', date: 'Feb 1, 2026', type: 'PDF', size: '2.4 MB' },
              { title: 'Fall 2025 Semester Summary', date: 'Dec 15, 2025', type: 'PDF', size: '3.1 MB' },
              { title: 'Q4 2025 Research Export', date: 'Oct 1, 2025', type: 'CSV', size: '156 KB' }
            ].map((report, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 lg:py-6 border-b border-[#e8e3dc] last:border-0 hover:bg-[#faf8f5] px-2 sm:px-4 transition gap-4 sm:gap-0">
                <div className="flex items-center gap-3 lg:gap-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#c85a3e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <div className="min-w-0">
                    <div className="font-medium text-[#1a2332] mb-1 text-sm sm:text-base truncate">{report.title}</div>
                    <div className="text-xs sm:text-sm text-[#3d4451]">{report.date} • {report.type} • {report.size}</div>
                  </div>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#1a2332] text-white hover:bg-[#c85a3e] transition text-sm sm:text-base w-full sm:w-auto">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}