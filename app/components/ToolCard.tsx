'use client'

import Link from 'next/link'
import Sidebar from './Sidebar'

// Add the ToolCard component
function ToolCard({ 
  name, 
  categories, 
  cost, 
  description, 
  ethicalNote 
}: { 
  name: string
  categories: string[]
  cost: 'Free' | 'Freemium' | 'Paid'
  description: string
  ethicalNote?: string
}) {
  const costColors = {
    Free: 'bg-green-100 text-green-800',
    Freemium: 'bg-blue-100 text-blue-800',
    Paid: 'bg-amber-100 text-amber-800'
  }

  return (
    <div className="bg-white border border-[#e8e3dc] p-4 sm:p-6 hover:border-[#7a8b7e] transition-colors">
      <h3 className="text-xl sm:text-2xl font-serif font-light mb-3">{name}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((cat, i) => (
          <span key={i} className="text-xs px-2 sm:px-3 py-1 bg-[#f0ede6] text-[#3d4451]">
            {cat}
          </span>
        ))}
      </div>
      
      <span className={`inline-block text-xs px-2 sm:px-3 py-1 mb-4 ${costColors[cost]}`}>
        {cost}
      </span>
      
      <p className="text-sm sm:text-base text-[#3d4451] mb-4 leading-relaxed">{description}</p>
      
      {ethicalNote && (
        <p className="text-xs sm:text-sm text-amber-700 bg-amber-50 p-3 mb-4 border-l-2 border-amber-400">
          {ethicalNote}
        </p>
      )}
      
      <Link href="#" className="text-[#7a8b7e] hover:underline text-sm font-medium">
        Learn more →
      </Link>
    </div>
  )
}

export default function Tools() {
  const tools = [
    { name: 'ChatGPT', categories: ['Content Generation', 'Feedback'], cost: 'Freemium' as const, desc: 'Generative AI for creating lesson plans, generating feedback, and drafting course materials.', ethical: '⚠️ Consider: Potential bias, unclear authorship, transparency concerns' },
    { name: 'Grammarly', categories: ['Feedback', 'Grading'], cost: 'Freemium' as const, desc: 'AI-powered writing assistant for providing grammar and style feedback on student essays.', ethical: undefined },
    { name: 'Perplexity AI', categories: ['Research', 'Content Generation'], cost: 'Free' as const, desc: 'AI search engine that provides cited answers. Useful for research assistance.', ethical: undefined },
    { name: 'Gradescope', categories: ['Grading', 'Assessment'], cost: 'Freemium' as const, desc: 'AI-assisted grading platform that streamlines assessment of assignments and exams.', ethical: undefined },
    { name: 'Notion AI', categories: ['Lesson Planning', 'Organization'], cost: 'Paid' as const, desc: 'AI writing and organization tool integrated into Notion. Helps draft syllabi and organize materials.', ethical: undefined },
    { name: 'Quillbot', categories: ['Content Generation', 'Feedback'], cost: 'Freemium' as const, desc: 'Paraphrasing and summarization tool for creating multiple versions of explanations.', ethical: '⚠️ Consider: Academic integrity implications' }
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
            <ToolCard
              key={i}
              name={tool.name}
              categories={tool.categories}
              cost={tool.cost}
              description={tool.desc}
              ethicalNote={tool.ethical}
            />
          ))}
        </div>
      </main>
    </div>
  )
}