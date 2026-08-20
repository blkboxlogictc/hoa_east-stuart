import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Priorities } from './pages/Priorities'
import { Governance } from './pages/Governance'
import { Updates } from './pages/Updates'
import { GetInvolved } from './pages/GetInvolved'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/programs', element: <Programs /> },
      { path: '/priorities', element: <Priorities /> },
      { path: '/governance', element: <Governance /> },
      { path: '/updates', element: <Updates /> },
      { path: '/get-involved', element: <GetInvolved /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
