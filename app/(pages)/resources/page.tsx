'use client'

import Sidebar from "@/app/components/Sidebar"


export default function Resources() {
  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 pt-20 lg:pt-12 max-w-5xl">
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">Resources & Guidelines</h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">Best practices and ethical frameworks for AI in education</p>
        </div>

        {/* Ethical Guidelines */}
        <div className="bg-white p-6 sm:p-8 lg:p-12 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Ethical AI Integration Principles</h2>
          
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">1. Transparency</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                Always be transparent with students about when and how AI tools are being used in your teaching practice. 
                Clearly communicate the role AI plays in grading, feedback, or content creation.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Include an AI usage statement in your syllabus 
                explaining which tools you use and for what purposes.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">2. Equity & Access</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                Ensure that your use of AI tools doesn't create barriers for students with different access levels, 
                learning styles, or technological capabilities.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Always provide non-AI alternatives and 
                ensure AI-generated content is accessible to all students.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">3. Bias Awareness</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                Recognize that AI tools can perpetuate existing biases. Critically evaluate AI outputs for bias 
                related to race, gender, culture, and other dimensions of diversity.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Review AI-generated content for bias 
                before sharing with students. Use multiple sources and perspectives.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">4. Pedagogical Integrity</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                AI should enhance, not replace, your pedagogical expertise. Use AI as a tool to amplify your 
                teaching, not as a substitute for human judgment and mentorship.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Always review and customize AI outputs. 
                Add your own insights, examples, and personal touch.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">5. Data Privacy</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                Protect student privacy when using AI tools. Be mindful of what student data you're sharing 
                with third-party AI platforms.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Anonymize student data before inputting 
                into AI tools. Review platform privacy policies carefully.</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#c85a3e] mb-3 lg:mb-4">6. Continuous Reflection</h3>
              <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed mb-3 lg:mb-4">
                Regularly reflect on your AI usage. Track its impact on your workload, teaching quality, 
                and student outcomes. Be willing to adjust your practices.
              </p>
              <div className="bg-[#faf8f5] p-4 sm:p-6 border-l-4 border-[#c85a3e]">
                <strong className="text-[#1a2332] text-sm sm:text-base">Best Practice:</strong> 
                <span className="text-sm sm:text-base text-[#3d4451]"> Use this platform to log and reflect 
                on each AI interaction. Review your patterns monthly.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-[#1a2332] text-[#faf8f5] p-6 sm:p-8 lg:p-12 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 lg:mb-6">Recommended Reading</h2>
          <div className="space-y-3 lg:space-y-4">
            {[
              { title: 'UNESCO Guidelines on AI in Education', type: 'Policy Document' },
              { title: 'Ethical Frameworks for AI in Higher Education', type: 'Research Paper' },
              { title: 'AI Literacy for Educators', type: 'Online Course' },
              { title: 'Bias in Educational AI Systems', type: 'Research Paper' }
            ].map((resource, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 lg:py-4 border-b border-white/10 last:border-0 gap-3 sm:gap-0">
                <div className="min-w-0">
                  <div className="font-medium mb-1 text-sm sm:text-base">{resource.title}</div>
                  <div className="text-xs sm:text-sm opacity-75">{resource.type}</div>
                </div>
                <button className="px-4 sm:px-6 py-2 border border-[#faf8f5] hover:bg-[#faf8f5] hover:text-[#1a2332] transition text-sm sm:text-base w-full sm:w-auto flex-shrink-0">
                  Access
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 lg:mb-8 text-[#1a2332]">Frequently Asked Questions</h2>
          <div className="space-y-4 lg:space-y-6">
            {[
              {
                q: 'Should I tell students when I use AI for grading?',
                a: 'Yes, transparency is essential. Explain how AI assists your grading process and what role it plays.'
              },
              {
                q: 'How do I avoid over-relying on AI tools?',
                a: 'Regularly track your usage, set boundaries for AI use, and ensure you maintain direct engagement with student work.'
              },
              {
                q: 'What if AI-generated content contains errors?',
                a: 'Always review and fact-check AI outputs before sharing with students. AI should augment, not replace, your expertise.'
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-[#e8e3dc] pb-4 lg:pb-6 last:border-0">
                <h3 className="text-base sm:text-lg font-semibold text-[#1a2332] mb-2 lg:mb-3">{faq.q}</h3>
                <p className="text-sm sm:text-base text-[#3d4451] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}