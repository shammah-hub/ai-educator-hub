import Link from 'next/link'
import { ArrowLeft, ExternalLink, Star, Clock, AlertCircle, TrendingUp, Users, Sidebar } from 'lucide-react'

export default function ToolDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const tool = {
    id: params.id,
    name: 'ChatGPT',
    description: 'ChatGPT is a versatile AI assistant developed by OpenAI that can help educators with a wide range of tasks including content generation, lesson planning, student feedback, and more. It uses advanced natural language processing to understand context and provide thoughtful responses.',
    category: ['content-generation', 'feedback', 'lesson-planning', 'research'],
    cost: 'freemium',
    url: 'https://chat.openai.com',
    rating: 4.5,
    totalUsers: 156,
    avgTimeSaved: 3.2,
    ethicalNotes: [
      'Potential for bias in generated content',
      'Authorship and attribution concerns',
      'Privacy considerations with student data',
      'Risk of over-reliance on AI',
    ],
    useCases: [
      {
        title: 'Grading Support',
        description: 'Generate rubrics, draft feedback comments, and analyze student responses',
        timeSaved: '2-4 hours/week',
      },
      {
        title: 'Lesson Planning',
        description: 'Create lesson outlines, generate discussion questions, and design activities',
        timeSaved: '3-5 hours/week',
      },
      {
        title: 'Content Creation',
        description: 'Draft lecture notes, create study guides, and develop practice problems',
        timeSaved: '2-3 hours/week',
      },
    ],
    reviews: [
      {
        user: 'Dr. Sarah M.',
        department: 'Computer Science',
        rating: 5,
        comment: 'Incredibly helpful for generating diverse practice problems. Saves me hours each week.',
        date: '2 weeks ago',
      },
      {
        user: 'Prof. James K.',
        department: 'English Literature',
        rating: 4,
        comment: 'Great for brainstorming discussion questions, but I always review and modify the output.',
        date: '1 month ago',
      },
    ],
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar /> 
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <Link href="/tools" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Tools
        </Link>
        
        {/* Tool Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
          <div className="flex flex-col mb-4 sm:mb-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-2">{tool.name}</h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className={`badge text-xs sm:text-sm ${tool.cost === 'free' ? 'badge-green' : tool.cost === 'freemium' ? 'badge-blue' : 'badge-yellow'}`}>
                  {tool.cost}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{tool.rating}</span>
                  <span className="text-gray-500 text-xs sm:text-sm">({tool.totalUsers} users)</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.category.map((cat, index) => (
                  <span key={index} className="badge badge-gray text-xs sm:text-sm">
                    {cat.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-2.5 sm:py-3"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </a>
            <Link href={`/log-usage?tool=${tool.id}`} className="btn-secondary text-center text-sm sm:text-base py-2.5 sm:py-3">
              Log Usage
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="card p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Avg. Time Saved</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600">{tool.avgTimeSaved} hrs</p>
                <p className="text-xs text-gray-500 mt-1">per week</p>
              </div>
              <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Community Users</p>
                <p className="text-xl sm:text-2xl font-bold text-primary-600">{tool.totalUsers}</p>
                <p className="text-xs text-gray-500 mt-1">educators</p>
              </div>
              <div className="bg-primary-50 p-2 sm:p-3 rounded-lg">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
            </div>
          </div>
          
          <div className="card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Satisfaction Rate</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-600">92%</p>
                <p className="text-xs text-gray-500 mt-1">positive feedback</p>
              </div>
              <div className="bg-purple-50 p-2 sm:p-3 rounded-lg">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Use Cases */}
            <div className="card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Common Use Cases</h2>
              <div className="space-y-3 sm:space-y-4">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-3 sm:pl-4 py-2">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{useCase.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{useCase.description}</p>
                    <p className="text-xs text-green-600 font-medium">
                      ⏱️ Typical time saved: {useCase.timeSaved}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews */}
            <div className="card p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Educator Reviews</h2>
              <div className="space-y-3 sm:space-y-4">
                {tool.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{review.user}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{review.department}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 sm:h-4 sm:w-4 ${
                              i < review.rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{review.comment}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Ethical Considerations */}
            <div className="card p-4 sm:p-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-start space-x-3 mb-3">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 shrink-0 mt-0.5" />
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Ethical Considerations</h3>
              </div>
              <ul className="space-y-2">
                {tool.ethicalNotes.map((note, index) => (
                  <li key={index} className="text-xs sm:text-sm text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Best Practices */}
            <div className="card p-4 sm:p-6 bg-blue-50 border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Best Practices</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Always review and edit AI-generated content</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Be transparent with students about AI usage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Don't share sensitive student data</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Maintain your pedagogical judgment</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Stats */}
            <div className="card p-4 sm:p-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Quick Stats</h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Most used for:</span>
                  <span className="font-medium text-gray-900">Grading</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary users:</span>
                  <span className="font-medium text-gray-900">STEM faculty</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Added on:</span>
                  <span className="font-medium text-gray-900">Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}