import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar'
import { useTokenRefresh } from './hooks/authHooks'
import Header from './components/layouts/Header'

function App() {
  useTokenRefresh()
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <Sidebar />

      <Header />

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
export default App
