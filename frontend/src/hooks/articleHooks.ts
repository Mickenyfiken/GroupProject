import { useQuery } from '@tanstack/react-query'
import { getArticleById } from '../api/articleApi'

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticleById(id),
    enabled: !!id,
  })
}
