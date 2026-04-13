import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
