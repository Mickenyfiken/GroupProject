import RenderNewsList from '../components/renderNewsList'
import { Outlet, useLocation } from 'react-router'
const Dashboard = () => {
const location = useLocation()

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <RenderNewsList location={location} />
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard
