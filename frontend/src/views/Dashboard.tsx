import RenderNewsList from '../components/renderNewsList'
import { useLocation } from 'react-router'
const Dashboard = () => {
const location = useLocation()

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>

        <RenderNewsList location={location} />
      </div>
    </>
  )
}

export default Dashboard
