import type { NewsSummary } from '../types/NewsType'

const NewsListService = async () => {
  const response = await fetch(`/api/news?limit=10`)

  const newsList: NewsSummary[] = await response.json()

  return newsList
}

export default NewsListService
