type BaseNewsArticle = {
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

export type adjacentNewsArticle = {
  id: string
  slug: string
  title: string
  createdAt: Date
}

export type Tag = {
  id: string
  name: string
}

export type NewsArticle = BaseNewsArticle & {
  adjacentArticles: {
    prevArticle: adjacentNewsArticle
    nextArticle: adjacentNewsArticle
  }
}
