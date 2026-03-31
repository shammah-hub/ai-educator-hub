'use client'

export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://ai-educator-hub-backend.onrender.com/api'

type RequestOptions = RequestInit & {
  token?: string | null
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers, ...rest } = options

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  })

  const isJson = response.headers.get('content-type')?.includes('application/json')
  const payload = isJson ? await response.json() : null

  if (!response.ok) {
    const message =
      payload && typeof payload === 'object' && 'message' in payload
        ? Array.isArray(payload.message)
          ? payload.message.join(', ')
          : String(payload.message)
        : 'Request failed.'

    throw new ApiError(message, response.status)
  }

  return payload as T
}

export function getApiBaseUrl() {
  return API_BASE_URL
}
