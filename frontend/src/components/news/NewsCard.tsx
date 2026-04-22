import { formatDate } from '../../helpers/formatDate'
import type { Article } from '../../types/articleType'
import Pill from '../ui/Pill'

const NewsCard = ({ imageUrl, imageAltText, title, tags, body, author, createdAt }: Article) => {
  return (
    <div className="flex flex-col max-w-3xl p-4 bg-white rounded-lg shadow-md h-60 just">
      <div className="flex flex-row flex-wrap items-center text-base text-black/50 font-family-FSE-Text">
        <span>
          {formatDate(new Date(createdAt))} | {author}
        </span>
        <div className="flex flex-row items-center ml-4 gap-x-2">
          {tags.map((text: string) => (
            <Pill key={text} text={text} size="small" />
          ))}
        </div>
      </div>
      <h2 className="mt-2 text-base font-bold text-article-title">{title}</h2>
      <div className="flex flex-row flex-1 h-5 gap-2 mt-2 text-sm text-gray-700">
        <p className="text-sm text-gray-700 omt-2 line-clamp-4">{body}</p>

        <img
          className="object-cover rounded-md w-34 h-36 shrink-0"
          src={imageUrl}
          alt={imageAltText}
        />
      </div>
    </div>
  )
}
export default NewsCard
