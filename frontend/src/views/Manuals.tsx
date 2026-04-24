import { useState } from 'react'
import SearchField from '../components/ui/SearchField'
import { ManualList } from '../components/manuals/ManualsList'
import { ManualExample } from '../components/manuals/ManualExample'

const Manuals = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <h1>Manuals</h1>
      <SearchField value={searchTerm} onChange={setSearchTerm} placeholder="Sök manualer..." />
      <ManualList />
      <ManualExample />
    </div>
  )
}

export default Manuals
