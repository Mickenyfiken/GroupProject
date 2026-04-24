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
              <Link to={`${manual.id}`}>{manual.title && <p>{manual.title} <span>{manual.description}</span></p>}</Link>
            </li>
          )}
        ></ItemList>
      </ul>
    </div>
  )

  // const { data, isLoading, isError } = useAllManuals(10)

  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>Something went wrong</p>

  // return (
  //   <ul>
  //     {data.map((manual: BaseManual) => (
  //       <li key={manual.id}>
  //         {manual.title},{' '}
  //         {manual.resources.filter((r) => r.type === ManualResourceType.Video).length} videos,{' '}
  //         {manual.resources.filter((r) => r.type === ManualResourceType.File).length} files
  //       </li>
  //     ))}
  //   </ul>
  // )
}
