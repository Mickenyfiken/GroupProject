import type { NewsSummary } from '../../types/NewsType'
import NewsCard from './NewsCard'
import NewsListService from '../../api/newsListService'
import { Link } from 'react-router'
import { ItemList } from '../genericContent/ItemList'

const NewsList = ({ location }: { location: any }) => {
  return (
    <ItemList<NewsSummary>
      fetchService={NewsListService}
      renderItem={(item) => (
        <Link
          className="w-fit"
          key={item.id}
          to={`nyheter/${item.id}/${item.slug}`}
          state={{ backgroundLocation: location }}
        >
          <NewsCard {...item} />
        </Link>
      )}
    />
  )
}

export default NewsList
