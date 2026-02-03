'use client'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function Loader({ size = 'md', text, className = '' }: LoaderProps) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 py-12 ${className}`}>
      <div className={`${sizes[size]} border-[#e8e3dc] border-t-[#7a8b7e] rounded-full animate-spin`}></div>
      {text && (
        <p className={`${textSizes[size]} text-[#3d4451] font-light`}>{text}</p>
      )}
    </div>
  )
}