import { apiClient } from '../helpers/apiClient'
import type { BaseManual } from '../types/manualType'

export const getManualsById = (id: string): Promise<BaseManual> => {
  return apiClient(`/manuals/${id}`)
}

export const getAllManuals = ({ limit = 10 }: { limit?: number }): Promise<BaseManual[]> => {
  return apiClient('/manuals', {
    params: { limit },
  })
}
