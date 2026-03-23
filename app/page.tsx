'use client'

import Link from 'next/link'
import { useState } from 'react'

const modules = [
  {
    title: 'Tool Directory',
    label: 'Module 01',
    description:
      'Curated AI tools for teaching, with pricing, ethical notes, use cases, and direct logging entry points.',
  },
  {
    title: 'Usage Logging',
    label: 'Module 02',
    description:
      'Structured capture of course context, task type, time saved, time added, workload impact, and ethical concerns.',
  },
  {
    title: 'Guided Reflection',
    label: 'Module 03',
    description:
      'Post-usage reflection forms for autonomy, ethics, productivity, and narrative observations.',
  },
  {
    title: 'Analytics Dashboard',
    label: 'Module 04',
    description:
      'Personal summaries covering tool usage, net hours saved, task distribution, and peer-oriented comparisons.',
  },
  {
    title: 'Report Generation',
    label: 'Module 05',
    description:
      'Saved report snapshots for personal reflection, institutional summaries, and research-oriented exports.',
  },
  {
    title: 'Ethics Resources',
    label: 'Module 06',
    description:
      'Built-in guidance, recommended readings, and FAQ content for responsible AI integration in education.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Register And Profile',
    description:
      'Educators create an account, provide institutional context, and declare their current level of AI familiarity.',
  },
  {
    step: '02',
    title: 'Explore And Select Tools',
    description:
      'Users browse the AI tool directory, review ethical considerations, and pick tools relevant to classroom practice.',
  },
  {
    step: '03',
    title: 'Log Classroom Usage',
    description:
      'Each interaction is recorded with the course, task type, workload effect, and selected ethical concerns.',
  },
  {
    step: '04',
    title: 'Reflect And Evaluate',
    description:
      'The platform converts recorded activity into dashboard metrics, reflections, insights, and report summaries.',
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#1a2332]">
      <nav className="fixed top-0 z-50 w-full border-b border-[#d9d0c4]/70 bg-[#f7f2ea]/90 px-4 py-4 backdrop-blur sm:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="text-xl font-serif font-semibold sm:text-2xl">AI Educator Hub</div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#modules" className="text-sm text-[#3d4451] transition hover:text-[#c85a3e]">Modules</a>
            <a href="#workflow" className="text-sm text-[#3d4451] transition hover:text-[#c85a3e]">Workflow</a>
            <a href="#outcomes" className="text-sm text-[#3d4451] transition hover:text-[#c85a3e]">Outcomes</a>
            <a href="#docs" className="text-sm text-[#3d4451] transition hover:text-[#c85a3e]">Documentation</a>
            <Link href="/login" className="bg-[#1a2332] px-6 py-3 text-sm text-[#faf8f5] transition hover:bg-[#c85a3e]">
              Open App
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="p-2 text-[#1a2332] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-3 border-t border-[#d9d0c4] pt-4 lg:hidden">
            <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#3d4451]">Modules</a>
            <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#3d4451]">Workflow</a>
            <a href="#outcomes" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#3d4451]">Outcomes</a>
            <a href="#docs" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#3d4451]">Documentation</a>
            <Link href="/login" className="block bg-[#1a2332] px-5 py-3 text-center text-sm text-[#faf8f5]">
              Open App
            </Link>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-40">
        <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-[#c85a3e]/10 blur-3xl"></div>
        <div className="absolute left-[-6rem] bottom-0 h-64 w-64 rounded-full bg-[#7a8b7e]/15 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 border border-[#c85a3e]/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c85a3e]">
              Masters Project Implementation
            </div>
            <h1 className="max-w-4xl text-4xl font-serif font-light leading-tight sm:text-5xl lg:text-7xl">
              A research-driven platform for
              <span className="block font-semibold text-[#c85a3e]">mindful AI integration in teaching</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#3d4451] sm:text-lg lg:text-xl">
              AI Educator Hub is an implemented MVP that helps educators discover AI tools, log teaching usage,
              reflect on ethical and pedagogical impact, and generate analytics-backed reports for continuous improvement.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/signup" className="bg-[#c85a3e] px-8 py-4 text-center text-base text-white transition hover:bg-[#d66a4f]">
                Launch The MVP
              </Link>
              <a href="#docs" className="border border-[#1a2332] px-8 py-4 text-center text-base text-[#1a2332] transition hover:bg-[#1a2332] hover:text-white">
                View Project Documentation
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Frontend', 'Next.js 16'],
                ['Backend', 'NestJS + MongoDB'],
                ['API Docs', 'Swagger UI'],
                ['Deployment', 'Docker Compose'],
              ].map(([label, value]) => (
                <div key={label} className="border border-[#d9d0c4] bg-white p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#7a8b7e]">{label}</div>
                  <div className="mt-3 text-lg font-serif">{value}</div>
                </div>
              ))}
            </div>
            <div className="border border-[#d9d0c4] bg-[#1a2332] p-6 text-[#faf8f5]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c3d3c5]">Implemented Scope</div>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <span>Authentication and profile setup</span>
                <span>Tool catalogue and detail views</span>
                <span>Usage logs and reflection workflow</span>
                <span>Insights, reports, and ethics resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="bg-[#e6ddd2] px-4 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#7a8b7e]">Core Platform Modules</div>
              <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl">What the implemented system delivers</h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-[#3d4451] sm:text-base">
              The platform was designed as a minimum viable product for empirical evaluation, focusing on traceability,
              ethical reflection, and measurable workload impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <div key={module.title} className="border-l-4 border-transparent bg-[#faf8f5] p-8 transition hover:border-[#c85a3e] hover:shadow-xl">
                <div className="text-xs uppercase tracking-[0.25em] text-[#7a8b7e]">{module.label}</div>
                <h3 className="mt-4 text-2xl font-serif">{module.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#3d4451] sm:text-base">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#faf8f5] px-4 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center lg:mb-16">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#7a8b7e]">Operational Workflow</div>
            <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl">From educator onboarding to reflective reporting</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.step} className="relative overflow-hidden border border-[#d9d0c4] bg-white p-6 sm:p-8">
                <div className="absolute right-4 top-4 text-5xl font-serif text-[#c85a3e]/15">{item.step}</div>
                <div className="mb-4 text-xs uppercase tracking-[0.25em] text-[#c85a3e]">Step {item.step}</div>
                <h3 className="text-xl font-serif text-[#1a2332]">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#3d4451]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe8de] px-4 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 lg:mb-16">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#7a8b7e]">System Architecture</div>
            <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl">Technical composition of the MVP</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                title: 'Client Layer',
                details: 'Next.js frontend with authenticated routes, dashboard views, forms, and API integration logic.',
              },
              {
                title: 'Service Layer',
                details: 'NestJS backend exposing modules for auth, tools, logs, reflections, insights, reports, and resources.',
              },
              {
                title: 'Data Layer',
                details: 'MongoDB document storage for users, tools, usage logs, reflections, reports, and seeded resources.',
              },
              {
                title: 'Deployment Layer',
                details: 'Docker Compose orchestration for the API and database, plus Swagger-backed API documentation.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#d9d0c4] bg-white p-6 sm:p-8">
                <h3 className="text-xl font-serif">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#3d4451]">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="bg-[#1a2332] px-4 py-16 text-[#faf8f5] sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-4">
          {[
            ['6', 'Implemented MVP modules'],
            ['9+', 'Primary API route groups'],
            ['MongoDB', 'Document database for application state'],
            ['Docker', 'Local deployment strategy'],
          ].map(([value, label]) => (
            <div key={label} className="border-l-2 border-[#c85a3e]/40 pl-5">
              <div className="text-4xl font-serif text-[#c85a3e]">{value}</div>
              <div className="mt-2 text-sm text-[#faf8f5]/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#faf8f5] px-4 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d9d0c4] bg-[#f1ebe2] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#7a8b7e]">Research Direction</div>
            <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl">Designed for evaluation, not just demonstration</h2>
            <p className="mt-6 text-base leading-relaxed text-[#3d4451] sm:text-lg">
              The system is positioned as a practical artefact for investigating how educators can adopt AI tools with
              accountability, reflection, and measurable evidence. The next documentation sections formalize the implementation
              and evaluation narrative for dissertation use.
            </p>
          </div>
        </div>
      </section>

      <section id="docs" className="bg-[#e6ddd2] px-4 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 lg:mb-16">
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-[#7a8b7e]">Dissertation Support Material</div>
            <h2 className="text-3xl font-serif sm:text-4xl lg:text-5xl">Masters-ready technical documentation</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-[#faf8f5] p-8 border border-[#d9d0c4]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c85a3e]">Chapter 4</div>
              <h3 className="mt-3 text-2xl font-serif">System Implementation</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3d4451]">
                Covers architecture, module design, database schema structure, API workflow, implementation strategy,
                integration details, and deployment setup for the developed system.
              </p>
              <div className="mt-5 font-mono text-xs text-[#7a8b7e]">
                docs/chapter-4-system-implementation.md
              </div>
            </div>
            <div className="bg-[#faf8f5] p-8 border border-[#d9d0c4]">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c85a3e]">Chapter 5</div>
              <h3 className="mt-3 text-2xl font-serif">Evaluation And Conclusion</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3d4451]">
                Summarizes system outcomes, test observations, limitations, research implications, recommendations,
                and the final conclusion of the project.
              </p>
              <div className="mt-5 font-mono text-xs text-[#7a8b7e]">
                docs/chapter-5-evaluation-and-conclusion.md
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9d0c4] bg-[#faf8f5] px-4 py-10 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xl font-serif font-semibold text-[#1a2332]">AI Educator Hub</div>
            <p className="mt-2 text-sm text-[#3d4451]">
              Research-backed MVP for reflective AI adoption in education.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-[#3d4451]">
            <a href="#modules" className="transition hover:text-[#c85a3e]">Modules</a>
            <a href="#workflow" className="transition hover:text-[#c85a3e]">Workflow</a>
            <a href="#docs" className="transition hover:text-[#c85a3e]">Documentation</a>
            <Link href="/resources" className="transition hover:text-[#c85a3e]">Resources</Link>
            <Link href="/signup" className="transition hover:text-[#c85a3e]">Create Account</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
