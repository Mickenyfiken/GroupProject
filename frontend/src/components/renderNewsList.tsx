import { useState, useEffect } from 'react'
import type { NewsSummary } from '../types/newsSummary'
import NewsCard from './newsCard/newsCard'
import NewsListService from '../api/newsListService'
import { Link } from 'react-router'

const RenderNewsList = ({ location }: { location: any }) => {
  const [newsList, setNewsList] = useState<NewsSummary[]>([])

  useEffect(() => {
    const fetchNewsList = async () => {
      const newsList = await NewsListService()
      setNewsList(newsList)
    }
    fetchNewsList()
  }, [])

  return (
    <div className="flex flex-col gap-6 p-4">
      {newsList.map((article) => (
        <Link
          className="w-fit"
          key={article.id}
          to={`nyheter/${article.id}/${article.slug}`}
          state={{ backgroundLocation: location }}
        >
          <NewsCard {...article} />
        </Link>
      ))}
    </div>
  )
}

export default RenderNewsList
