import { createBrowserRouter } from 'react-router'
import App from './App'
import NewsModal from './components/news/NewsModal'
import ManualModal from './components/manuals/ManualModal'
import Dashboard from './views/Dashboard'
import ErrorPage from './views/ErrorPage'
import Login from './views/Login'
import Manuals from './views/Manuals'
import NotFound from './views/NotFound'
import Nyheter from './views/Nyheter'
import Kampanjer from './views/Kampanjer'
import Butiksservice from './views/Butiksservice'
import Ordercentral from './views/Ordercentral'
import Leverantorer from './views/Leverantorer'
import Kontakter from './views/Kontakter'
import Support from './views/Support'

// const queryClient = new QueryClient()

// const authLoader = async () => {
//   try {
//     await queryClient.ensureQueryData({
//       queryKey: ['me'],
//       queryFn: fetchMe,
//     })

//     return null
//   } catch {
//     return redirect('/login')
//   }
// }

export const router = createBrowserRouter([
  {
    path: '/',
    // loader: authLoader, // Protects all child routes by checking for authentication
    HydrateFallback: () => <p>Loading...</p>,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: 'nyheter/:id/:slug',
        element: <NewsModal />,
      },
      { path: '/manualer', element: <Manuals /> },
      { path: '/manualer/:id', element: <ManualModal /> },
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
