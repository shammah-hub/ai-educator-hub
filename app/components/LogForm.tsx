'use client'

import { useState } from 'react'
import { Clock, AlertCircle } from 'lucide-react'

interface LogFormProps {
  preselectedTool?: string
}

export default function LogForm({ preselectedTool }: LogFormProps) {
  const [formData, setFormData] = useState({
    toolId: preselectedTool || '',
    course: '',
    task: '',
    hoursSaved: '',
    hoursAdded: '',
    workloadImpact: '',
    ethicalConcerns: [] as string[],
    notes: '',
  })
  
  const tasks = [
    'grading',
    'lesson-planning',
    'feedback',
    'content-creation',
    'research',
    'administrative',
    'student-support',
    'assessment-design',
  ]
  
  const ethicalConcernOptions = [
    'bias',
    'privacy',
    'transparency',
    'accuracy',
    'plagiarism',
    'student-autonomy',
    'data-security',
  ]
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
    alert('Usage logged successfully!')
  }
  
  const handleEthicalConcernToggle = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      ethicalConcerns: prev.ethicalConcerns.includes(concern)
        ? prev.ethicalConcerns.filter(c => c !== concern)
        : [...prev.ethicalConcerns, concern]
    }))
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <div>
          <label className="label">AI Tool Used</label>
          <select
            className="input-field text-sm sm:text-base"
            value={formData.toolId}
            onChange={(e) => setFormData({ ...formData, toolId: e.target.value })}
            required
          >
            <option value="">Select a tool</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="claude">Claude</option>
            <option value="grammarly">Grammarly</option>
            <option value="turnitin">Turnitin</option>
          </select>
        </div>
        
        <div>
          <label className="label">Course/Module</label>
          <input
            type="text"
            className="input-field text-sm sm:text-base"
            placeholder="e.g., CS101"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div>
        <label className="label">Teaching Task</label>
        <select
          className="input-field text-sm sm:text-base"
          value={formData.task}
          onChange={(e) => setFormData({ ...formData, task: e.target.value })}
          required
        >
          <option value="">Select a task</option>
          {tasks.map(task => (
            <option key={task} value={task}>
              {task.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <div>
          <label className="label">
            <Clock className="inline h-4 w-4 mr-1" />
            Hours Saved
          </label>
          <input
            type="number"
            step="0.5"
            min="0"
            className="input-field text-sm sm:text-base"
            placeholder="e.g., 2.5"
            value={formData.hoursSaved}
            onChange={(e) => setFormData({ ...formData, hoursSaved: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="label">
            <Clock className="inline h-4 w-4 mr-1" />
            Hours Added (if any)
          </label>
          <input
            type="number"
            step="0.5"
            min="0"
            className="input-field text-sm sm:text-base"
            placeholder="e.g., 0.5"
            value={formData.hoursAdded}
            onChange={(e) => setFormData({ ...formData, hoursAdded: e.target.value })}
          />
        </div>
      </div>
      
      <div>
        <label className="label">Overall Workload Impact</label>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {['positive', 'neutral', 'negative'].map((impact) => (
            <button
              key={impact}
              type="button"
              onClick={() => setFormData({ ...formData, workloadImpact: impact })}
              className={`py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg border-2 font-medium transition-all text-sm sm:text-base ${
                formData.workloadImpact === impact
                  ? 'border-primary-600 bg-primary-50 text-primary-700'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {impact.charAt(0).toUpperCase() + impact.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="label">
          <AlertCircle className="inline h-4 w-4 mr-1" />
          Ethical Concerns (select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {ethicalConcernOptions.map((concern) => (
            <button
              key={concern}
              type="button"
              onClick={() => handleEthicalConcernToggle(concern)}
              className={`py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                formData.ethicalConcerns.includes(concern)
                  ? 'border-red-600 bg-red-50 text-red-700'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {concern.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label className="label">Additional Notes</label>
        <textarea
          className="input-field text-sm sm:text-base"
          rows={4}
          placeholder="Share your experience, observations, or concerns..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" className="btn-primary flex-1 text-sm sm:text-base py-3 lg:py-3.5">
          Save Usage Log
        </button>
        <button type="button" className="btn-ghost sm:w-auto text-sm sm:text-base py-3 lg:py-3.5">
          Cancel
        </button>
      </div>
    </form>
  )
}