import type { NewsSummary } from '../types/newsSummary'

const NewsListService = async () => {
  const response = await fetch(`api/GetNewsSummaryList/10`)

  const newsList: NewsSummary[] = await response.json()

  return newsList
}

export default NewsListService
