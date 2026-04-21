import { Link, useLocation } from 'react-router'
import { useArticles } from '../hooks/articleHooks'

const Dashboard = () => {
  const location = useLocation()

  const { data, isLoading, error } = useArticles({})

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading articles</div>
  if (isLoading || error || !data) console.log(isLoading, error, data)

  if (!data) return <div>Articles not found</div>

  console.log(data)

  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>

        <Link
          to="nyheter/1/nya-trender-inom-cykelmarknaden-2026"
          state={{ backgroundLocation: location }}
        >
          Länk till nyhet exempel
        </Link>
      </div>
    </>
  )
}

export default Dashboard
