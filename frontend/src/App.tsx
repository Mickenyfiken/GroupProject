import { Outlet } from 'react-router'

function App() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen">
      <aside className="bg-surface-dark-gary min-w-[60px] row-span-2 sticky top-0 h-screen text-white">
        Aside
      </aside>

      <header className="sticky top-0">Header</header>

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
