'use client'

import LogForm from "@/app/components/LogForm"
import Loader from "@/app/components/Loader"
import Sidebar from "@/app/components/Sidebar"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { useRequireAuth } from "@/app/lib/use-require-auth"

function LogUsageContent() {
  const searchParams = useSearchParams()
  const auth = useRequireAuth()
  const preselectedTool = searchParams.get('tool') ?? undefined
  const logId = searchParams.get('log') ?? undefined

  if (auth.isLoading || !auth.token) {
    return <Loader text="Checking session..." className="min-h-screen" />
  }

  return (
    <div className="flex min-h-screen bg-[#faf8f5]">
      <Sidebar />

      {/* Main Content */}
      <main className="ml-0 lg:ml-72 flex-1 p-4 sm:p-6 md:p-8 lg:p-12 max-w-5xl pt-20 lg:pt-12">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-3">
            {logId ? 'Edit Usage Log' : 'Log AI Usage'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light">
            {logId ? 'Update a previous teaching activity' : 'Record how you used AI tools in your teaching practice'}
          </p>
        </div>

        <LogForm preselectedTool={preselectedTool} logId={logId} />
      </main>
    </div>
  )
}

export default function LogUsage() {
  return (
    <Suspense fallback={<Loader text="Loading log form..." className="min-h-screen" />}>
      <LogUsageContent />
    </Suspense>
  )
}
