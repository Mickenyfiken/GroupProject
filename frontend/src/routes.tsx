import { QueryClient } from '@tanstack/react-query'
import { createBrowserRouter, redirect } from 'react-router'
import { fetchMe } from './api/authApi'
import App from './App'
import Dashboard from './views/Dashboard'
import ErrorPage from './views/ErrorPage'
import Login from './views/Login'
import Manuals from './views/Manuals'
import NotFound from './views/NotFound'
import NewsModal from './components/news/NewsModal'

const queryClient = new QueryClient()

const authLoader = async () => {
  try {
    await queryClient.ensureQueryData({
      queryKey: ['me'],
      queryFn: fetchMe,
    })

    return null
  } catch {
    return redirect('/login')
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    loader: authLoader, // Protects all child routes by checking for authentication
    HydrateFallback: () => <p>Loading...</p>,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        children: [
          {
            path: 'nyheter/:id/:slug',
            element: <NewsModal />,
          },
        ],
      },
      { path: '/manualer', element: <Manuals /> },
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
