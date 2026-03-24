import Link from 'next/link'

import {
  architectureLayers,
  evaluationHighlights,
  projectLimitations,
  projectModules,
  projectObjectives,
  projectOverview,
  schemaSummary,
} from './lib/project-content'

const quickFacts = [
  ['Project type', 'Masters project MVP'],
  ['Frontend', 'Next.js 16'],
  ['Backend', 'NestJS'],
  ['Database', 'MongoDB'],
  ['API documentation', 'Swagger UI'],
  ['Deployment', 'Docker Compose'],
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1f2933]">
      <header className="border-b border-[#d8d0c4] bg-[#ede7dd]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-[#9d4d38]">Academic Project Overview</div>
            <div className="mt-2 font-serif text-2xl text-[#18202a]">{projectOverview.title}</div>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-[#505866]">
            <a href="#abstract" className="transition hover:text-[#9d4d38]">
              Abstract
            </a>
            <a href="#implementation" className="transition hover:text-[#9d4d38]">
              Implementation
            </a>
            <a href="#evaluation" className="transition hover:text-[#9d4d38]">
              Evaluation
            </a>
            <a href="#chapters" className="transition hover:text-[#9d4d38]">
              Chapters
            </a>
            <Link href="/login" className="transition hover:text-[#9d4d38]">
              Open app
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Project Title</div>
              <h1 className="mt-4 font-serif text-3xl leading-tight text-[#18202a] sm:text-5xl">
                {projectOverview.subtitle}
              </h1>
              <p className="mt-6 text-base leading-8 text-[#4d5560]">{projectOverview.abstract}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/chapter-4"
                  className="border border-[#9d4d38] bg-[#9d4d38] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#87412f]"
                >
                  Read Chapter 4
                </Link>
                <Link
                  href="/chapter-5"
                  className="border border-[#bcb2a3] bg-[#f7f4ef] px-5 py-3 text-sm font-medium text-[#25303d] transition hover:border-[#9d4d38] hover:text-[#9d4d38]"
                >
                  Read Chapter 5
                </Link>
                <Link
                  href="/signup"
                  className="border border-[#bcb2a3] bg-white px-5 py-3 text-sm font-medium text-[#25303d] transition hover:border-[#9d4d38] hover:text-[#9d4d38]"
                >
                  Open implemented MVP
                </Link>
              </div>
            </div>

            <aside className="border border-[#d8d0c4] bg-[#f8f5f0] p-7 shadow-sm sm:p-8">
              <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Project Facts</div>
              <dl className="mt-5 space-y-4">
                {quickFacts.map(([label, value]) => (
                  <div key={label} className="border-b border-[#e6ded2] pb-4 last:border-b-0 last:pb-0">
                    <dt className="text-sm font-medium text-[#5c6470]">{label}</dt>
                    <dd className="mt-1 text-base text-[#1f2933]">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>

          <section id="abstract" className="grid gap-6 lg:grid-cols-2">
            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl text-[#18202a]">Problem Statement</h2>
              <p className="mt-5 text-base leading-8 text-[#4d5560]">{projectOverview.problemStatement}</p>
            </div>
            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <h2 className="font-serif text-2xl text-[#18202a]">Aim of the Study</h2>
              <p className="mt-5 text-base leading-8 text-[#4d5560]">{projectOverview.aim}</p>
            </div>
          </section>

          <section className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
            <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Research Objectives</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projectObjectives.map((objective, index) => (
                <div key={objective} className="flex gap-4 border border-[#ebe4da] bg-[#faf8f4] p-5">
                  <div className="font-serif text-3xl text-[#9d4d38]">{String(index + 1).padStart(2, '0')}</div>
                  <p className="text-base leading-7 text-[#46505c]">{objective}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="implementation" className="space-y-6">
            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Implemented System</div>
              <h2 className="mt-4 font-serif text-3xl text-[#18202a]">Core functional modules delivered in the MVP</h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {projectModules.map((module) => (
                  <div key={module.title} className="border border-[#ebe4da] bg-[#faf8f4] p-5">
                    <h3 className="font-serif text-xl text-[#18202a]">{module.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#46505c]">{module.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
                <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">System Architecture</div>
                <div className="mt-6 space-y-4">
                  {architectureLayers.map((layer) => (
                    <div key={layer.title} className="border-l-4 border-[#9d4d38] bg-[#faf8f4] px-4 py-4">
                      <h3 className="font-serif text-xl text-[#18202a]">{layer.title}</h3>
                      <p className="mt-2 text-base leading-7 text-[#46505c]">{layer.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
                <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Database Schema Summary</div>
                <ul className="mt-6 space-y-4 text-base leading-7 text-[#46505c]">
                  {schemaSummary.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9d4d38]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="evaluation" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Evaluation Summary</div>
              <h2 className="mt-4 font-serif text-3xl text-[#18202a]">What the implemented system demonstrates</h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-[#46505c]">
                {evaluationHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9d4d38]"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
              <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Current Limitations</div>
              <ul className="mt-6 space-y-4 text-base leading-7 text-[#46505c]">
                {projectLimitations.map((limitation) => (
                  <li key={limitation} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9d4d38]"></span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="chapters" className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
            <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">Dissertation Chapters</div>
            <h2 className="mt-4 font-serif text-3xl text-[#18202a]">Technical documentation embedded into the application</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#4d5560]">
              The project documentation is now presented as application pages instead of external-looking reference notes.
              This keeps the public interface aligned with a school project presentation and makes the implementation and
              evaluation chapters directly accessible from the system itself.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link
                href="/chapter-4"
                className="block border border-[#ebe4da] bg-[#faf8f4] p-6 transition hover:border-[#9d4d38]"
              >
                <div className="text-sm uppercase tracking-[0.22em] text-[#9d4d38]">Chapter 4</div>
                <h3 className="mt-3 font-serif text-2xl text-[#18202a]">System Implementation</h3>
                <p className="mt-3 text-base leading-7 text-[#46505c]">
                  Architecture, technology stack, module design, schema structure, integration approach, and deployment setup.
                </p>
              </Link>

              <Link
                href="/chapter-5"
                className="block border border-[#ebe4da] bg-[#faf8f4] p-6 transition hover:border-[#9d4d38]"
              >
                <div className="text-sm uppercase tracking-[0.22em] text-[#9d4d38]">Chapter 5</div>
                <h3 className="mt-3 font-serif text-2xl text-[#18202a]">Evaluation and Conclusion</h3>
                <p className="mt-3 text-base leading-7 text-[#46505c]">
                  Objective achievement, technical assessment, strengths, limitations, implications, and recommendations.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
