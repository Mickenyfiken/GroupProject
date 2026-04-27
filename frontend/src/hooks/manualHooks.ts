import { useQuery } from '@tanstack/react-query'
import { getAllManuals, getManualsById } from '../api/manualApi'

export const useAllManuals = (limit: number) => {
  return useQuery({
    queryKey: ['manuals', limit],
    queryFn: () => getAllManuals(limit),
  })
}

export const useOneManual = (id: number) => {
  return useQuery({
    queryKey: ['manual', id],
    queryFn: () => getManualsById(id),
    enabled: !isNaN(id) && id > 0,
    retry: 1,
  })
}
