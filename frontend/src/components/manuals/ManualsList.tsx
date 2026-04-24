import type { BaseManual } from '../../types/manualType'
import { ManualResourceType } from '../../types/manualType'
import { useAllManuals } from '../../hooks/manualHooks'

type ManualListProps = {
  search: string
  filteredType: number | null
}

export function ManualList({ search, filteredType }: ManualListProps) {
  const { data, isLoading, isError } = useAllManuals(10)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  const filteredData = data.filter((manual: BaseManual) => {
    const matchesSearch = manual.title.toLowerCase().includes(search.toLowerCase())
    const matchesType =
      filteredType === null || manual.resources.some((r) => r.type === filteredType)

    return matchesSearch && matchesType
  })

  return (
    <ul>
      {filteredData.map((manual: BaseManual) => (
        <li key={manual.id}>
          {manual.title},{' '}
          {manual.resources.filter((r) => r.type === ManualResourceType.Video).length} videos,{' '}
          {manual.resources.filter((r) => r.type === ManualResourceType.File).length} files
        </li>
      ))}
    </ul>
  )
}
