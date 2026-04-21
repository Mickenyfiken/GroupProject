import { Outlet, useLocation } from 'react-router'
import { useInactivityLogout } from './hooks/authHooks'
import ArticleModal from './components/news/ArticleModal'
import Dashboard from './views/Dashboard'
function App() {
  useInactivityLogout()
  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  console.log('background', backgroundLocation)
  console.log('should show modal:', !!backgroundLocation)
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <aside className="bg-surface-dark-gary min-w-[60px] row-span-2 sticky top-0 h-screen text-white">
        Aside
      </aside>

      <header className="sticky top-0">Header</header>

      <main className="overflow-auto">
        {backgroundLocation ? <Dashboard /> : <Outlet />}
      </main>
      {backgroundLocation && <ArticleModal />}
    </div>
  )
}

export default App
