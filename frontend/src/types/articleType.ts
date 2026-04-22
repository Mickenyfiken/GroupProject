type BaseArticle = {
  id: string
  slug: string
  createdAt: Date
  author: string
  imageUrl: string
  imageAltText: string
  title: string
  tags: Tag[]
  body: string
}

export type PaginatedArticle = {
  id: string
  slug: string
  title: string
  createdAt: Date
}

export type Tag = {
  id: string
  name: string
}

export type Article = BaseArticle & {
  prevArticle: PaginatedArticle
  nextArticle: PaginatedArticle
}
