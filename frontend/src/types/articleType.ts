type BaseArticle = {
  id: number
  slug: string
  date: string
  author: string
  coverImage: {
    src: string
    alt: string
  }
  title: string
  tags: string[]
  body: string
}

export type Article = BaseArticle & {
  prevArticle: BaseArticle
  nextArticle: BaseArticle
}
