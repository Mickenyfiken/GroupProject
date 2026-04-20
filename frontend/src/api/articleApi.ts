import articles from '../mock-data/mock-articles.json'

export const getArticleById = async (id: string) => {
  const article = articles.find((a) => a.id === id)
  if (!article) {
    throw new Error('Article not found')
  }

  const prevAndNextArticle = getAdjacentArticles(id)

  console.log({ ...prevAndNextArticle, ...article })
  return { ...prevAndNextArticle, ...article }
}

const getAdjacentArticles = (id: string) => {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  const index = sorted.findIndex((a) => a.id === id)

  if (index === -1) {
    throw new Error('Article not found')
  }

  return {
    prevArticle: sorted[index - 1] ?? null,
    nextArticle: sorted[index + 1] ?? null,
  }
}
