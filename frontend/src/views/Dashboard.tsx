import { Link, useLocation } from 'react-router'
import { useArticles } from '../hooks/articleHooks'

const Dashboard = () => {
  const location = useLocation()

  const { data, isLoading, error } = useArticles({})

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading articles</div>
  if (!data) return <div>Articles not found</div>

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>

        <Link
          to="nyheter/2/sa-paverkar-leverantorer-prisbilden"
          state={{ backgroundLocation: location }}
        >
          Länk till nyhet exempel
        </Link>
        {/* <Link
          to="nyheter/1/nya-trender-inom-cykelmarknaden-2026"
          state={{ backgroundLocation: location }}
        >
          Länk till nyhet exempel
        </Link> */}
      </div>
    </>
  )
}

export default Dashboard
