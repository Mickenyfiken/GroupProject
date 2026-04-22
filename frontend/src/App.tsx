import { Outlet } from 'react-router'
import { useInactivityLogout, useTokenRefresh } from './hooks/authHooks'
import Header from './components/layouts/Header'

function App() {
  useInactivityLogout()
  useTokenRefresh()
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <aside className="bg-surface-dark-gary min-w-[60px] row-span-2 sticky top-0 h-screen text-white">
        Aside
      </aside>

      <Header/>

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
export default App
