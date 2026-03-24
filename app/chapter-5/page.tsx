import type { Metadata } from 'next'

import ChapterArticle from '../components/ChapterArticle'
import { chapter5Sections } from '../lib/project-content'

export const metadata: Metadata = {
  title: 'Chapter 5 | AI Educator Hub',
  description: 'Evaluation and conclusion chapter for the AI Educator Hub masters project.',
}

export default function Chapter5Page() {
  return (
    <ChapterArticle
      chapterLabel="Chapter 5"
      title="Evaluation, Conclusion, and Recommendations"
      intro="This page presents the evaluation chapter of the AI Educator Hub masters project. It summarizes how the delivered system meets the research objectives, its technical strengths, current limitations, and the recommended direction for future work."
      sections={chapter5Sections}
    />
  )
}
