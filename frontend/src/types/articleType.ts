type BaseArticle = {
  id: string
  slug: string
  createdAt: Date
  author: string
  imageUrl: string
  imageAltText: string
  title: string
  tags: string[]
  body: string
}

export type Article = BaseArticle & {
  prevArticle: BaseArticle
  nextArticle: BaseArticle
}
