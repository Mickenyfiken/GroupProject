import { formatDate } from '../../helpers/formatDate'
import type { NewsSummary, Tag } from '../../types/NewsType'
import Pill from '../ui/Pill'

const NewsCard = ({
  imageUrl,
  imageAltText,
  title,
  tags,
  body,
  author,
  createdAt,
}: NewsSummary) => {
  return (
    <div className="flex flex-col max-w-3xl p-4 mt-4 ml-4 bg-white rounded-lg shadow-md h-60 relative overflow-hidden flex-shrink-0">
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
      <h2 className="mt-2 text-base font-bold text-article-title leading-tight">{title}</h2>
      <div className="flex flex-row gap-4 mt-2 flex-1 overflow-hidden">
        <div className="relative flex-1 h-full overflow-hidden">
          <div
            className="mt-2
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
                  text-gray-700
                  line-clamp-5
                  leading-relaxed
                  "
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

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
