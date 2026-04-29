import { apiClient } from '../helpers/apiClient'
import type { BaseManual } from '../types/manualType'

export const getManualsById = (id: string): Promise<BaseManual> => {
  return apiClient(`/manuals/${id}`)
}

export const getAllManuals = ({ limit = 10 }: { limit?: number }): Promise<BaseManual[]> => {
  return apiClient('/manuals', {
    params: { limit },
  })

  // if (!res.ok) {
  //   const { mockManuals } = await import('./mockManuals')
  //   return mockManuals.slice(0, limit)
  // }

  // return res.json()
}
