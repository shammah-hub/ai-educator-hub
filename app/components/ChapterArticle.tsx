import Link from 'next/link'

import type { ChapterSection } from '../lib/project-content'

type ChapterArticleProps = {
  chapterLabel: string
  title: string
  intro: string
  sections: ChapterSection[]
}

export default function ChapterArticle({
  chapterLabel,
  title,
  intro,
  sections,
}: ChapterArticleProps) {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1f2933]">
      <header className="border-b border-[#d8d0c4] bg-[#ede7dd]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="text-sm font-medium text-[#5e5a54] transition hover:text-[#9d4d38]">
            Back to project overview
          </Link>
          <Link href="/login" className="text-sm font-medium text-[#5e5a54] transition hover:text-[#9d4d38]">
            Open application
          </Link>
        </div>
      </header>

      <main className="px-4 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
            <div className="text-xs uppercase tracking-[0.24em] text-[#9d4d38]">{chapterLabel}</div>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-[#18202a] sm:text-4xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#4d5560]">{intro}</p>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <section key={section.id} className="border border-[#d8d0c4] bg-white p-7 shadow-sm sm:p-10">
                <h2 className="font-serif text-2xl text-[#18202a]">{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-[#3f4752]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-3 text-base leading-7 text-[#3f4752]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9d4d38]"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
