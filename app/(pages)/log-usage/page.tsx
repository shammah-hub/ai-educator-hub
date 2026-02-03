'use client'

import LogForm from "@/app/components/LogForm"
import Sidebar from "@/app/components/Sidebar"



export default function LogUsage() {
  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 flex-1 p-12 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-light mb-3">Log AI Usage</h1>
          <p className="text-xl text-[#3d4451] font-light">Record how you used AI tools in your teaching practice</p>
        </div>

        <LogForm />
      </main>
    </div>
  )
}