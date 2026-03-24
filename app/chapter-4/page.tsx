import type { Metadata } from 'next'

import ChapterArticle from '../components/ChapterArticle'
import { chapter4Sections } from '../lib/project-content'

export const metadata: Metadata = {
  title: 'Chapter 4 | AI Educator Hub',
  description: 'System implementation chapter for the AI Educator Hub masters project.',
}

export default function Chapter4Page() {
  return (
    <ChapterArticle
      chapterLabel="Chapter 4"
      title="System Implementation"
      intro="This page presents the implementation chapter of the AI Educator Hub masters project. It explains the architecture, technology choices, core functional modules, database design, and deployment approach used to build the MVP."
      sections={chapter4Sections}
    />
  )
}
