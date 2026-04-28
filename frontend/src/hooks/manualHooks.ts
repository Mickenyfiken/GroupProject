import { useQuery } from '@tanstack/react-query'
import { getAllManuals, getManualsById } from '../api/manualApi'

export const useManual = (id: string) => {
  return useQuery({
    queryKey: ['manual', id],
    queryFn: () => getManualsById(id),
    enabled: !!id,
    retry: 1,
  })
}

export const useManuals = ({ limit }: { limit?: number }) => {
  return useQuery({
    queryKey: ['manuals'],
    queryFn: () => getAllManuals({ limit }),
    retry: 1,
  })
}
