import type { NewsSummary } from '../types/NewsType'

const BASE_URL = import.meta.env.VITE_API_TARGET

const NewsListService = async () => {
  const response = await fetch(`${BASE_URL}/api/news?limit=10`)

  const newsList: NewsSummary[] = await response.json()

  return newsList
}

export default NewsListService
