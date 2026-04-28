import { apiClient } from '../helpers/apiClient'
import type { NewsArticle } from '../types/NewsType'

export const getArticleById = (id: string): Promise<NewsArticle> => {
  return apiClient(`/news/${id}`)
}

export const getArticles = ({ limit = 10 }: { limit?: number }): Promise<NewsArticle[]> => {
  return apiClient('/news', {
    params: { limit },
  })
}
