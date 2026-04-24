import type { BaseManual } from '../../types/manualType'
import { ItemList } from '../genericContent/ItemList'
import { getAllManuals } from '../../api/manualApi'
import { Link } from 'react-router'

export const ManualList = () => {
  return (
    <div>
      <ul>
        <ItemList<BaseManual>
          fetchService={() => getAllManuals(10)}
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
