'use client'

import Sidebar from '@/app/components/Sidebar'
import Link from 'next/link'

export default function Tools() {
  const tools = [
    { name: 'ChatGPT', categories: ['Content Generation', 'Feedback'], cost: 'Freemium', desc: 'Generative AI for creating lesson plans, generating feedback, and drafting course materials.', ethical: '⚠️ Consider: Potential bias, unclear authorship, transparency concerns' },
    { name: 'Grammarly', categories: ['Feedback', 'Grading'], cost: 'Freemium', desc: 'AI-powered writing assistant for providing grammar and style feedback on student essays.', ethical: null },
    { name: 'Perplexity AI', categories: ['Research', 'Content Generation'], cost: 'Free', desc: 'AI search engine that provides cited answers. Useful for research assistance.', ethical: null },
    { name: 'Gradescope', categories: ['Grading', 'Assessment'], cost: 'Freemium', desc: 'AI-assisted grading platform that streamlines assessment of assignments and exams.', ethical: null },
    { name: 'Notion AI', categories: ['Lesson Planning', 'Organization'], cost: 'Paid', desc: 'AI writing and organization tool integrated into Notion. Helps draft syllabi and organize materials.', ethical: null },
    { name: 'Quillbot', categories: ['Content Generation', 'Feedback'], cost: 'Freemium', desc: 'Paraphrasing and summarization tool for creating multiple versions of explanations.', ethical: '⚠️ Consider: Academic integrity implications' }
  ]

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />
      
      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">AI Tools Directory</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Discover and explore AI tools curated for educators</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="flex-1 relative">
            <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#3d4451]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input type="text" placeholder="Search tools..." className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none focus:border-[#7a8b7e] text-sm sm:text-base" />
          </div>
          <select className="px-3 sm:px-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none text-sm sm:text-base">
            <option>All Categories</option>
            <option>Grading</option>
            <option>Content Generation</option>
            <option>Feedback</option>
          </select>
          <select className="px-3 sm:px-4 py-3 sm:py-4 border border-[#e8e3dc] bg-white focus:outline-none text-sm sm:text-base">
            <option>All Pricing</option>
            <option>Free</option>
            <option>Freemium</option>
            <option>Paid</option>
          </select>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 border-t-4 border-[#e8e3dc] hover:border-[#c85a3e] transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1a2332]">{tool.name}</h3>
                <span className={`text-xs px-2 sm:px-3 py-1 shrink-0 ml-2 ${tool.cost === 'Free' ? 'bg-[#7a8b7e] text-white' : 'bg-[#e8e3dc] text-[#1a2332]'}`}>
                  {tool.cost}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap mb-3 sm:mb-4">
                {tool.categories.map((cat, j) => (
                  <span key={j} className="text-xs px-2 sm:px-3 py-1 bg-[#faf8f5] text-[#3d4451]">{cat}</span>
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed mb-4 sm:mb-6">{tool.desc}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link href="/log-usage" className="flex-1">
                  <button className="w-full px-4 py-2 sm:py-3 bg-[#1a2332] text-white text-xs sm:text-sm hover:bg-[#c85a3e] transition">
                    Log Usage
                  </button>
                </Link>
                <button className="flex-1 px-4 py-2 sm:py-3 bg-[#e8e3dc] text-[#1a2332] text-xs sm:text-sm hover:bg-[#7a8b7e] hover:text-white transition">
                  View Details
                </button>
              </div>
              {tool.ethical && (
                <div className="bg-[#c85a3e]/10 p-3 sm:p-4 border-l-2 border-[#c85a3e] text-xs sm:text-sm text-[#3d4451]">
                  {tool.ethical}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}