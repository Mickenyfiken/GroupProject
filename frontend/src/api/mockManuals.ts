import type { BaseManual } from '../types/manualType'

const randomDate = () => {
  const start = new Date(2022, 0, 1)
  const end = new Date(2025, 11, 31)
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return date.toISOString()
}

export const mockManuals: BaseManual[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Manual ${i + 1}`,
  resources: [
    {
      id: i + 1,
      manualId: i + 1,
      url: null,
      type: 1,
      title: `Manual ${i + 1}`,
      createdAt: randomDate(),
    },
  ],
}))
