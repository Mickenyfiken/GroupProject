import NewsList from '../components/news/NewsList'
import { useLocation } from 'react-router'
import SearchField from '../components/ui/SearchField'
import { useState } from 'react'
const Nyheter = () => {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <h1 className="sr-only">Nyheter</h1>
      <SearchField value={searchTerm} onChange={setSearchTerm} placeholder="Sök..." />
      <select>
        <option value="">Alla nyheter</option>
      </select>
      <NewsList location={location} />
    </>
  )
}

export default Nyheter
