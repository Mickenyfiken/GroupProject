import { Link } from 'react-router'
import { useManuals } from '../../hooks/manualHooks'
import type { BaseManual } from '../../types/manualType'

type ManualListProps = {
  search?: string
  filteredType?: number | null
}

export const ManualList = ({ search, filteredType }: ManualListProps) => {
  const { data, isLoading, error } = useManuals({ limit: 25 })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading manuals</div>
  if (!data) return <div>Manuals not found</div>

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-200">
        <div className="flex-shrink-0 w-9" />
        <span className="w-64">Namn</span>
        <span>Senast uppdaterad</span>
      </div>
      <ul className="divide-y divide-gray-200">
        {data.map((manual: BaseManual) => (
          <li key={manual.id}>
            <Link
              to={`${manual.id}`}
              className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-gray-50"
            >
              <img src="/images/bikeIcon.png" alt="" className="flex-shrink-0 w-9 h-9" />

              <span className="w-64 text-sm text-gray-800 truncate">{manual.title}</span>

              <span className="flex-shrink-0 text-sm text-gray-500">
                {String(manual.resources[0].createdAt).substring(0, 10)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
