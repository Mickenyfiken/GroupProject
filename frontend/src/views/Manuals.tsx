import { useState } from 'react'
import { ManualList } from '../components/manuals/ManualsList'
import SearchField from '../components/ui/SearchField'
import { ManualResourceType } from '../types/manualType'

const Manuals = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const [filteredManuals, setFilteredManuals] = useState<number | null>(null)

  return (
    <div>
      <div id="searchRow" className="flex flex-row items-center gap-4 pl-8">
        <h3 className="w-48 m-0">ALLA MANUALER</h3>
        <SearchField value={searchTerm} onChange={setSearchTerm} placeholder="Sök manualer..." />
        <select
          className="w-32"
          onChange={(e) =>
            setFilteredManuals(e.target.value === '' ? null : Number(e.target.value))
          }
        >
          <option value="">Alla resurser</option>
          <option value={ManualResourceType.File}>Filer</option>
          <option value={ManualResourceType.Video}>Video</option>
        </select>
      </div>
      <ManualList search={searchTerm} filteredType={filteredManuals} />
    </div>
  )
}

export default Manuals
