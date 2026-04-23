import { Link, type Location } from 'react-router'
import { useArticles } from '../../hooks/articleHooks'
import type { NewsArticle } from '../../types/NewsType'
import NewsCard from './NewsCard'

const NewsList = ({ location }: { location: Location<unknown> }) => {
  const { data: articles, isLoading, error } = useArticles({})

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading articles</div>
  if (!articles) return <div>Articles not found</div>

  return (
    <div className="flex flex-col gap-6 p-4">
      {articles.map((article: NewsArticle) => (
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

export default NewsList
