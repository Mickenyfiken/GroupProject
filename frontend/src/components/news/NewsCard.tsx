import { formatDate } from '../../helpers/formatDate'
import type { NewsArticle, Tag } from '../../types/NewsType'
import Pill from '../ui/Pill'

const NewsCard = ({
  imageUrl,
  imageAltText,
  title,
  tags,
  body,
  author,
  createdAt,
}: NewsArticle) => {
  return (
    <div className="flex flex-col max-w-3xl p-4 bg-white rounded-lg shadow-md h-60 just">
      <div className="flex flex-row flex-wrap items-center text-base text-black/50 font-family-FSE-Text">
        <span>
          {formatDate(new Date(createdAt))} | {author}
        </span>
        <div className="flex flex-row items-center ml-4 gap-x-2">
          {tags.map(({ id, name }: Tag) => (
            <Pill key={id} text={name} size="small" />
          ))}
        </div>
      </div>
      <h2 className="mt-2 text-base font-bold text-article-title">{title}</h2>
      <div className="flex flex-row flex-1 h-5 gap-2 mt-2 text-sm text-gray-700">
        <p className="text-sm text-gray-700 omt-2 line-clamp-4">
          <div
            className="mt-8
                  [&_p]:mb-4
                  [&_p]:leading-relaxed
                  [&_ul]:list-disc
                  [&_ul]:pl-6
                  [&_ul]:mb-4
                  [&_ol]:list-decimal
                  [&_ol]:pl-6
                  [&_ol]:mb-4
                  [&_li]:mb-2
                  [&_a]:underline
                  [&_a]:font-semibold
                  [&_a:hover]:text-black
                "
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </p>

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
