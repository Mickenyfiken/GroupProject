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
    <div>
      <ul>
        <ItemList<BaseManual>
          fetchService={() => getAllManuals(25)}
          filter={(manual: BaseManual) =>
            filterBySearch(manual, search ?? '') && filterByType(manual, filteredType ?? null)
          }
          renderItem={(manual) => (
            <li key={manual.id}>
              <Link to={`${manual.id}`}>
                {manual.title && (
                  <p>
                    {manual.title} <span>{manual.description}</span>
                  </p>
                )}
              </Link>
            </li>
          )}
        ></ItemList>
      </ul>
    </div>
  )
}
