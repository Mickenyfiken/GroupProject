import { createBrowserRouter } from 'react-router'
import Dashboard from './views/Dashboard'
import App from './App'
import ErrorPage from './views/ErrorPage'
import NotFound from './views/NotFound'
import Manuals from './views/Manuals'

export const router = createBrowserRouter([
  {
    path: '/',
    HydrateFallback: () => <p>Loading...</p>,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/manuals', element: <Manuals /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
