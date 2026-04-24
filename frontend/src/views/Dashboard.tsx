import NewsList from '../components/news/NewsList'
import { useLocation } from 'react-router'
const Dashboard = () => {
  const location = useLocation()

  return (
    <>
      <h1 className="sr-only">Dashboard</h1>
      <NewsList location={location} />
    </>
  )
}

export default Dashboard
