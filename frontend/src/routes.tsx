import { createBrowserRouter } from 'react-router'
import App from './App'
import ErrorPage from './views/ErrorPage'
import NotFound from './views/NotFound'
import Dashboard from './views/Dashboard'
import Manuals from './views/Manuals'
import Login from './views/Login'
import Nyheter from './views/Nyheter'
import Kampanjer from './views/Kampanjer'
import Butiksservice from './views/Butiksservice'
import Ordercentral from './views/Ordercentral'
import Leverantorer from './views/Leverantorer'
import Kontakter from './views/Kontakter'
import Support from './views/Support'

export const router = createBrowserRouter([
  {
    path: '/',
    HydrateFallback: () => <p>Loading...</p>,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/manuals', element: <Manuals /> },
      { path: '/nyheter', element: <Nyheter /> },
      { path: '/kampanjer', element: <Kampanjer /> },
      { path: '/butiksservice', element: <Butiksservice /> },
      { path: '/ordercentral', element: <Ordercentral /> },
      { path: '/leverantorer', element: <Leverantorer /> },
      { path: '/kontakter', element: <Kontakter /> },
      { path: '/support', element: <Support /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
