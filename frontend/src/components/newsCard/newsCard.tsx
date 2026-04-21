import { formatDate } from '../../helpers/formatDate'
import type { NewsSummary } from '../../types/newsSummary'

const NewsCard = ({ title, body, date, author, coverImage }: NewsSummary) => {
  return (
    <div className="flex flex-col h-60 max-w-3xl p-4 m-4 rounded-lg shadow-md bg-white just">
      <div>
        <p className=" text-black/50 text-base font-family-FSE-Text">
          {formatDate(new Date(date))} | {author}
        </p>
      </div>
      <h2 className="font-bold text-article-title text-base mt-2">{title}</h2>
      <div className="flex flex-1 flex-row gap-2 mt-2 h-5 text-sm text-gray-700">
        <p className="omt-2 text-sm text-gray-700 line-clamp-4">{body}</p>

        <img
          className="w-34 h-36 rounded-md shrink-0 object-cover"
          src={`/images/${coverImage.src}`}
        />
      </div>
    </div>
  )
}
export default NewsCard
