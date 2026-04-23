import { Outlet } from 'react-router'
import Sidebar from './components/Sidebar'
import { useTokenRefresh } from './hooks/authHooks'
import Header from './components/layouts/Header'

function App() {
  useTokenRefresh()
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default App
