'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { apiRequest } from './api'
import type { AuthResponse, UserProfile } from './types'

const AUTH_STORAGE_KEY = 'ai-educator-hub-auth'

interface RegisterInput {
  firstName: string
  lastName: string
  email: string
  password: string
  institution: string
  department: string
  yearsTeaching: number
  role: string
  aiFamiliarity: string
  goals?: string
}

interface LoginInput {
  email: string
  password: string
}

interface AuthContextValue {
  user: UserProfile | null
  token: string | null
  isLoading: boolean
  login: (input: LoginInput) => Promise<void>
  register: (input: RegisterInput) => Promise<void>
  logout: () => void
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  function persistAuth(nextToken: string, nextUser: UserProfile) {
    setToken(nextToken)
    setUser(nextUser)
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({
        token: nextToken,
        user: nextUser,
      }),
    )
  }

  function clearAuth() {
    setToken(null)
    setUser(null)
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  useEffect(() => {
    const hydrateAuth = async () => {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)

      if (!stored) {
        setIsLoading(false)
        return
      }

      try {
        const parsed = JSON.parse(stored) as { token: string; user: UserProfile }
        setToken(parsed.token)
        setUser(parsed.user)

        const profile = await apiRequest<UserProfile>('/auth/me', {
          token: parsed.token,
        })

        persistAuth(parsed.token, profile)
      } catch {
        clearAuth()
      } finally {
        setIsLoading(false)
      }
    }

    void hydrateAuth()
  }, [])

  const login = async (input: LoginInput) => {
    const response = await apiRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(input),
    })

    persistAuth(response.accessToken, response.user)
  }

  const register = async (input: RegisterInput) => {
    const response = await apiRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(input),
    })

    persistAuth(response.accessToken, response.user)
  }

  const refreshProfile = async () => {
    if (!token) {
      return
    }

    const profile = await apiRequest<UserProfile>('/auth/me', { token })
    persistAuth(token, profile)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        register,
        logout: clearAuth,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }

  return context
}
