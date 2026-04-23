import { useQuery } from '@tanstack/react-query'
import { getAllManuals } from '../api/manualApi'

export const useAllManuals = (limit: number) => {
  return useQuery({
    queryKey: ['manuals', limit],
    queryFn: () => getAllManuals(limit),
  })
}
