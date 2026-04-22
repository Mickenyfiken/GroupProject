import NewsList from '../components/news/NewsList'
import { useLocation } from 'react-router'
const Dashboard = () => {
  const location = useLocation()

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <NewsList location={location} />
      </div>
    </>
  )
}

export default Dashboard
