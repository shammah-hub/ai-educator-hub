interface StatCardProps {
  label: string
  value: string | number
  subtitle?: string
  change?: string
  positive?: boolean
}

export default function StatCard({ label, value, subtitle, change, positive }: StatCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 border-l-4 border-[#e8e3dc] hover:border-[#c85a3e] transition">
      <div className="text-xs text-[#3d4451] uppercase tracking-wide mb-2 sm:mb-3 font-medium">
        {label}
      </div>
      <div className="text-3xl sm:text-4xl font-serif mb-2 text-[#1a2332]">
        {value}
      </div>
      {subtitle && (
        <div className="text-xs sm:text-sm text-[#7a8b7e]">
          {subtitle}
        </div>
      )}
      {change && (
        <div className={`text-xs sm:text-sm ${positive ? 'text-[#7a8b7e]' : 'text-[#3d4451]'}`}>
          {change}
        </div>
      )}
    </div>
  )
}