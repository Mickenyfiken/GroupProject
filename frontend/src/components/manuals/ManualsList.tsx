import type { BaseManual } from '../../types/manualType'
import { ManualResourceType } from '../../types/manualType'
import { useAllManuals } from '../../hooks/manualHooks'

export function ManualList() {
  const { data, isLoading, isError } = useAllManuals(10)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <ul>
      {data.map((manual: BaseManual) => (
        <li key={manual.id}>
          {manual.title},{' '}
          {manual.resources.filter((r) => r.type === ManualResourceType.Video).length} videos,{' '}
          {manual.resources.filter((r) => r.type === ManualResourceType.File).length} files
        </li>
      ))}
    </ul>
  )
}
