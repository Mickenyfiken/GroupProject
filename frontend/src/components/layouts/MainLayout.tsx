import type { ReactNode } from 'react'

const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-12">
      {children}
    </div>
  )
}

export default MainLayout
