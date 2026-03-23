export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  institution: string
  department: string
  yearsTeaching: number
  role: string
  aiFamiliarity: string
  goals: string
  initials: string
}

export interface AuthResponse {
  accessToken: string
  user: UserProfile
}

export interface Tool {
  id: string
  name: string
  slug: string
  description: string
  categories: string[]
  pricingModel: 'free' | 'freemium' | 'paid'
  websiteUrl: string
  ethicalNotes: string[]
  useCases: Array<{
    title: string
    description: string
    timeSaved: string
  }>
  stats: {
    rating: number
    totalUsers: number
    avgTimeSaved: number
    mostUsedFor: string
    primaryUsers: string
  }
  addedAt: string
}

export interface UsageLog {
  id: string
  userId: string
  tool: {
    id: string
    name?: string
    slug?: string
  }
  course: string
  task: string
  hoursSaved: number
  hoursAdded: number
  netHoursSaved: number
  workloadImpact: 'positive' | 'neutral' | 'negative'
  ethicalConcerns: string[]
  notes: string
  usedAt: string
  createdAt: string
  updatedAt: string
}

export interface Reflection {
  id: string
  usageLogId: string
  autonomyRating: number
  ethicsRating: number
  productivityRating: number
  surprises: string
  futureAdjustments: string
  additionalComments: string
  createdAt: string
  updatedAt: string
}

export interface DashboardSummary {
  educator: {
    id: string
    fullName: string
    firstName: string
    department: string
    initials: string
  } | null
  stats: {
    toolsUsed: number
    totalLogs: number
    totalNetHoursSaved: number
    averageProductivity: number
  }
  recentActivity: Array<{
    id: string
    toolName: string
    course: string
    task: string
    netHoursSaved: number
    workloadImpact: string
    usedAt: string
  }>
}

export interface InsightsSummary {
  summary: {
    totalHoursSaved: number
    totalLogs: number
    mostUsedTool: string | null
    topTask: string | null
    averageProductivity: number
  }
  hoursSavedOverTime: Array<{
    period: string
    hours: number
  }>
  mostUsedTools: Array<{
    name: string
    count: number
  }>
  taskBreakdown: Array<{
    task: string
    count: number
  }>
  workloadImpact: {
    positive: number
    neutral: number
    negative: number
    positivePercent: number
  }
  peerComparison: {
    myAverageHoursPerLog: number
    peerAverageHoursPerLog: number
    performanceDeltaPercent: number
  }
}

export interface Report {
  id: string
  title: string
  reportType: string
  startDate: string
  endDate: string
  includeSections: string[]
  format: string
  status: string
  generatedAt: string
  summary: {
    totalLogs: number
    totalNetHoursSaved: number
    averageProductivity: number
    toolBreakdown: Array<{ tool: string; count: number }>
    taskBreakdown: Array<{ task: string; count: number }>
    workloadImpact: {
      positive: number
      neutral: number
      negative: number
    }
    csvRows: Array<Record<string, unknown>>
  }
}

export interface ResourcesContent {
  guidelines: Array<{
    title: string
    description: string
    bestPractice: string
  }>
  resources: Array<{
    id: string
    title: string
    type: string
    category: string
    description: string
    url: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}
