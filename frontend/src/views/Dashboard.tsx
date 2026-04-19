import { Link, useLocation } from 'react-router'

const Dashboard = () => {
  const location = useLocation()

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
