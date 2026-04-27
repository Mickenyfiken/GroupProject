import NewsList from '../components/news/NewsList'
import { useLocation } from 'react-router'
const Nyheter = () => {
  const location = useLocation()

  return (
    <>
      <h1 className="sr-only">Nyheter</h1>
      <NewsList location={location} />
    </>
  )
}

export default Nyheter
