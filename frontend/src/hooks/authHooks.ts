import { useQuery } from '@tanstack/react-query'
import { fetchMe } from '../api/authApi'

export const useAuth = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
    retry: false,
    staleTime: Infinity,
  })
}
