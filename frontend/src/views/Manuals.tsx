import { ManualExample } from '../components/manuals/ManualExample'
import { ManualList } from '../components/manuals/ManualsList'

const Manuals = () => {
  return (
    <div>
      <h1>Manuals</h1>
      <ManualList />
      <ManualExample />
    </div>
  )
}

export default Manuals
