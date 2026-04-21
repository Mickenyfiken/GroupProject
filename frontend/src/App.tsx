import { Outlet, useLocation } from 'react-router'
import { useInactivityLogout } from './hooks/authHooks'
import ArticleModal from './components/news/ArticleModal'
import Dashboard from './views/Dashboard'
import Manuals from './views/Manuals'
import { useRoutes } from 'react-router'
function App() {
  useInactivityLogout()
  const location = useLocation()
  const backgroundLocation = location.state?.backgroundLocation

  const routes = useRoutes(
    [
            { index: true, element: <Dashboard /> },
            {
              path: 'nyheter/:id/:slug',
              element: null,
            },
            { path: '/manualer', element: <Manuals /> },
          ],
          backgroundLocation || location
  )

  console.log('background', backgroundLocation)
  console.log('should show modal:', !!backgroundLocation)
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <aside className="bg-surface-dark-gary min-w-[60px] row-span-2 sticky top-0 h-screen text-white">
        Aside
      </aside>

      <header className="sticky top-0">Header</header>

      <main className="overflow-auto">
        {routes}
      </main>
      {backgroundLocation && <ArticleModal />}
    </div>
  )
}

export default App
