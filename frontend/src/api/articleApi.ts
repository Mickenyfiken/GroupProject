import type { NewsArticle } from '../types/NewsType'

const BASE_URL = import.meta.env.VITE_API_TARGET

export const getArticleById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/api/news/${id}`, {
    credentials: 'include',
  })

  if (!(await response).ok) {
    const errorText = await response.text()
    throw new Error(errorText)
  }

  const data = await response.json()

  return data
}

export const getArticles = async ({ limit = 10 }: { limit?: number }): Promise<NewsArticle[]> => {
  const response = await fetch(`${BASE_URL}/api/news?limit=${limit}`, {
    credentials: 'include',
  })

  if (!(await response).ok) {
    const errorText = await response.text()
    throw new Error(errorText)
  }

  return await response.json()
}
