// import { useState } from 'react'
// import SearchField from '../components/ui/SearchField'
import { ManualList } from '../components/manuals/ManualsList'
import { ManualResourceType } from '../types/manualType'
import { ManualResourceType } from '../types/manualType'

const Manuals = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [filteredManuals, setFilteredManuals] = useState<number | null>(null)

  return (
    <div>
      <h1>Manuals</h1>
      <SearchField value={searchTerm} onChange={setSearchTerm} placeholder="Sök manualer..." />
      <select
        onChange={(e) => setFilteredManuals(e.target.value === '' ? null : Number(e.target.value))}
      >
        <option value="">Alla typer</option>
        <option value={ManualResourceType.File}>Filer</option>
        <option value={ManualResourceType.Video}>Video</option>
      </select>
      <ManualList search={searchTerm} filteredType={filteredManuals} />
    </div>
  )
}

export default Manuals
