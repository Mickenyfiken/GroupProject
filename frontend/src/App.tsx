import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar'
import { useInactivityLogout } from './hooks/authHooks'

function App() {
  useInactivityLogout()
  return (
    <div className="flex h-screen">
      <Sidebar />

      <header className="sticky top-0">Header</header>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
