'use client'

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type ChartDatum = Record<string, string | number>

interface ChartProps {
  data?: number[] | ChartDatum[]
  type?: 'line' | 'bar'
  xKey?: string
  yKey?: string
  title?: string
  color?: string
  // Simple format props (for backward compatibility)
  labels?: string[]
}

export default function Chart({ 
  data, 
  type = 'line', 
  xKey = 'name', 
  yKey = 'value', 
  title, 
  color = '#7a8b7e',
  labels 
}: ChartProps) {
  // Handle simple array format (data as numbers[], labels as strings[])
  let chartData: ChartDatum[] | undefined
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'number' && labels) {
    chartData = (data as number[]).map((value, i) => ({
      [xKey]: labels[i],
      [yKey]: value
    }))
  } else {
    chartData = data as ChartDatum[] | undefined
  }

  const ChartComponent = type === 'line' ? LineChart : BarChart
  const DataComponent = type === 'line' ? Line : Bar
  
  return (
    <div>
      {title && <h3 className="text-lg font-semibold text-[#1a2332] mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={300}>
        <ChartComponent data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8e3dc" />
          <XAxis 
            dataKey={xKey} 
            stroke="#3d4451"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#3d4451"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e8e3dc',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
          />
          <DataComponent 
            type="monotone" 
            dataKey={yKey} 
            stroke={color}
            fill={color}
            strokeWidth={2}
          />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  )
}
