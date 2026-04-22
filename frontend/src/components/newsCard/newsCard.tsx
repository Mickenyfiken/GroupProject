import { formatDate } from '../../helpers/formatDate'
import type { NewsSummary } from '../../types/newsSummary'
import Pill from '../ui/Pill'

const NewsCard = ({ title, body, date, author, coverImage, tags }: NewsSummary) => {
  return (
    <div className="flex flex-col h-60 max-w-3xl p-4 rounded-lg shadow-md bg-white just">
      <div className="flex flex-row items-center flex-wrap text-black/50 text-base font-family-FSE-Text">
        <span>{formatDate(new Date(date))} | {author}</span>
        <div className="flex flex-row items-center ml-4 gap-x-2">
          {tags.map((text: string) => (
            <Pill key={text} text={text} size="small" />
          ))}
        </div>
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
