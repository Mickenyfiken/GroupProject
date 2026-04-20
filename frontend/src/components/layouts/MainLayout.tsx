import type { ReactNode } from 'react'
import { useInactivityLogout } from '../../hooks/authHooks'

const MainLayout = ({ children }: { children?: ReactNode }) => {
  useInactivityLogout()

  return <div className="grid min-h-screen grid-cols-12 min-w-screen">{children}</div>
}

export default MainLayout
