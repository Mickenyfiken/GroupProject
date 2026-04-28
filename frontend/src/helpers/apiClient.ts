// const BASE_URL = 'http://localhost:5277'
const BASE_URL =
  import.meta.env.VITE_API_TARGET || 'https://sportson-backend-dev.azurewebsites.net/api'

type Params = Record<string, string | number | undefined>
type ApiOptions = RequestInit & {
  params?: Params
}

export const apiClient = async <T = unknown>(url: string, options: ApiOptions = {}): Promise<T> => {
  const { params, ...fetchOptions } = options

  const query = getQuery(params)

  const res = await fetchResponse(`/api${url}${query}`, fetchOptions)

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(errorText || 'Request failed')
  }

  if (res.status === 204) return {} as T

  const text = await res.text()
  return text ? JSON.parse(text) : ({} as T)
}

const getQuery = (params?: Params) =>
  params
    ? '?' +
      Object.entries(params)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    : ''

const fetchResponse = async (url: string, fetchOptions: RequestInit = {}) =>
  await fetch(`${BASE_URL}${url}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(fetchOptions.headers || {}),
    },
    ...fetchOptions,
  })
