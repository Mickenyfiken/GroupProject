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
    <div>
      {newsList.map((article) => (
        <Link
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
