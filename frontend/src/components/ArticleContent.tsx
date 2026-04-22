import clsx from 'clsx'
import type { Article, Tag } from '../types/articleType'
import Image from './ui/Image'
import PaginationButton from './ui/PaginationButton'
import Pill from './ui/Pill'
import { formatDate } from '../helpers/formatDate'

const ArticleContent = ({
  data,
  modalState,
}: {
  data: Article
  modalState: {
    backgroundLocation: unknown
  }
}) => {
  const { imageUrl, imageAltText, title, tags, body, author, createdAt, prevArticle, nextArticle } =
    data!

  console.log(data)

  return (
    <>
      <div
        className={clsx(
          'w-[calc(100% + 56px)] -mx-6 -mt-6 md:-mx-14 md:-mt-14 relative',
          imageUrl && 'aspect-[2/1] md:aspect-[3/1]',
        )}
      >
        {imageUrl && (
          <Image
            className=""
            imageProps={{
              src: imageUrl,
              alt: imageAltText,
            }}
          />
        )}

        <div
          className={clsx(
            'flex  gap-8 w-full text-white',
            prevArticle ? 'justify-between' : 'justify-end',
            imageUrl ? 'absolute bottom-0' : 'mt-20',
          )}
        >
          {prevArticle && (
            <PaginationButton
              label={prevArticle.title}
              link={`/nyheter/${prevArticle.id}/${prevArticle.slug}`}
              state={modalState}
              direktion="prev"
            />
          )}
          {nextArticle && (
            <PaginationButton
              label={nextArticle.title}
              link={`/nyheter/${nextArticle.id}/${nextArticle.slug}`}
              state={modalState}
              direktion="next"
            />
          )}
        </div>
      </div>

      <div>
        <div className="flex gap-4 mt-12 font-extralight text-label-light">
          <span>{formatDate(new Date(createdAt))}</span>|<span>{author}</span>
        </div>

        <h1 className="mt-6 text-2xl font-medium ">{title}</h1>

        <span className="flex flex-wrap items-center mt-4 gap-x-2.5 gap-y-1.5">
          {tags.map(({ id, name }: Tag) => (
            <Pill key={id} text={name} />
          ))}
        </span>

        <div
          className="mt-8 text-black/65
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
      </div>
    </>
  )
}

export default ArticleContent
