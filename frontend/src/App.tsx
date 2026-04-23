import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar'
import { useInactivityLogout, useTokenRefresh } from './hooks/authHooks'
import Header from './components/layouts/Header'

function App() {
  useInactivityLogout()
  useTokenRefresh()
  return (
    <div className="flex h-screen">
      <Sidebar />

      <Header/>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
export default App
