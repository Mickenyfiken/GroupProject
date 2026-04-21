import { Link, useLocation } from 'react-router'
import RenderNewsList from '../components/renderNewsList'

const Dashboard = () => {
  const location = useLocation()

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>

        <RenderNewsList />

      </div>
    </>
  )
}

export default Dashboard
