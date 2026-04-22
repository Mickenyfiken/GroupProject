export const getArticleById = async (id: string) => {
  const article = await fetch(`/api/GetArticleById/${id}`).then((res) => res.json())

  if (!article) {
    throw new Error('Article not found')
  }

  return article
}
