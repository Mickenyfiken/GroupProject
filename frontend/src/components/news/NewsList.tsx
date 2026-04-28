import type { Location } from 'react-router'
import { Link } from 'react-router'
import { useArticles } from '../../hooks/articleHooks'
import type { NewsArticle } from '../../types/NewsType'
import NewsCard from './NewsCard'

const NewsList = ({ location }: { location: Location }) => {
  const { data, isLoading, error } = useArticles({ limit: 25 })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading article</div>
  if (!data) return <div>Article not found</div>

  return data.map((newsArticle: NewsArticle) => (
    <Link
      className="w-fit"
      key={newsArticle.id}
      to={`/nyheter/${newsArticle.id}/${newsArticle.slug}`}
      state={{ backgroundLocation: location }}
    >
      <NewsCard {...newsArticle} />
    </Link>
  ))
}
export default NewsList
