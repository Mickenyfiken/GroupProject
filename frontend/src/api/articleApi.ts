import type { Article } from '../types/articleType'

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

const getAdjacentArticles = (id: string) => {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const index = sorted.findIndex((a) => a.id === id)

  if (index === -1) {
    throw new Error('Article not found')
  }

  return {
    prevArticle: sorted[index - 1] ?? null,
    nextArticle: sorted[index + 1] ?? null,
  }
}

export const getArticles = async ({ limit = 10 }: { limit?: number }): Promise<Article> => {
  const response = await fetch(`${BASE_URL}/api/news?limit=${limit}`, {
    credentials: 'include',
  })

  if (!(await response).ok) {
    const errorText = await response.text()
    throw new Error(errorText)
  }

  return await response.json()
}
