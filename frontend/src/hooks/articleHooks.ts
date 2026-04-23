import { useQuery } from '@tanstack/react-query'
import { getArticleById, getArticles } from '../api/articleApi'

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => getArticleById(id),
    enabled: !!id,
    retry: 1,
  })
}

export const useArticles = ({ limit }: { limit?: number }) => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles({ limit }),
    retry: 1,
  })
}
