export type NewsSummary = {
  id: number
  slug: string
  title: string
  body: string
  tags: string[]
  author: string
  date: string
  coverImage: {
    src: string
    alt: string
  }
}
