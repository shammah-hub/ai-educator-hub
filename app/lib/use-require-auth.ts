'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from './auth'

export function useRequireAuth() {
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    if (!auth.isLoading && !auth.token) {
      router.replace('/login')
    }
  }, [auth.isLoading, auth.token, router])

  return auth
}
