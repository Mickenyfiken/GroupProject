import type { BaseManual } from '../../types/manualType'
import { ItemList } from '../genericContent/ItemList'
import { getAllManuals } from '../../api/manualApi'
import { Link } from 'react-router'
import { filterBySearch, filterByType } from '../../helpers/listFilters'

type ManualListProps = {
  search?: string
  filteredType?: number | null
}

export const ManualList = ({ search, filteredType }: ManualListProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 px-4 py-2 border-b border-gray-200 text-xs font-medium text-gray-500">
        <div className="w-9 flex-shrink-0" />
        <span className="w-64">Namn</span>
        <span>Senast uppdaterad</span>
      </div>
      <ul className="divide-y divide-gray-200">
        <ItemList<BaseManual>
          fetchService={() => getAllManuals(25)}
          filter={(manual: BaseManual) =>
            filterBySearch(manual, search ?? '') && filterByType(manual, filteredType ?? null)
          }
          renderItem={(manual) => (
            <li key={manual.id}>
              <Link
                to={`${manual.id}`}
                className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <img src="/images/bikeIcon.png" alt="" className="w-9 h-9 flex-shrink-0" />

                <span className="w-64 text-sm text-gray-800 truncate">{manual.title}</span>

                <span className="text-sm text-gray-500 flex-shrink-0">
                  {String(manual.resources[0].createdAt).substring(0, 10)}
                </span>
              </Link>
            </li>
          )}
        />
      </ul>
    </div>
  )
}
