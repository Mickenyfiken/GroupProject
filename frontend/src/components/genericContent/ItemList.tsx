import { useState, useEffect, type ReactNode } from 'react'

interface ItemProps<T> {
  fetchService: () => Promise<T[]>
  renderItem: (item: T) => ReactNode
  emptyMessage?: string
}

export function ItemList<T>({
  fetchService,
  renderItem,
  emptyMessage = 'No items found.',
}: ItemProps<T>) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchService()
        setItems(data)
      } catch {
        setError('Failed to fetch items.')
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [fetchService])

  if (loading) return <div>Loading...</div>

  if (error) return <div>{error}</div>

  if (items.length === 0) return <div>{emptyMessage}</div>

  return <>{items.map((item) => renderItem(item))}</>
}
