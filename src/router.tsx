import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Governance } from './pages/Governance'
import { Committees } from './pages/Committees'
import { Programs } from './pages/Programs'
import { TheoryOfChange } from './pages/TheoryOfChange'
import { Sponsors } from './pages/Sponsors'
import { News } from './pages/News'
import { Events } from './pages/Events'
import { Toolbox } from './pages/Toolbox'
import { GetInvolved } from './pages/GetInvolved'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/governance', element: <Governance /> },
      { path: '/committees', element: <Committees /> },
      { path: '/programs', element: <Programs /> },
      { path: '/theory-of-change', element: <TheoryOfChange /> },
      { path: '/sponsors', element: <Sponsors /> },
      { path: '/news', element: <News /> },
      { path: '/events', element: <Events /> },
      { path: '/toolbox', element: <Toolbox /> },
      { path: '/resources', element: <Toolbox /> },
      { path: '/get-involved', element: <GetInvolved /> },
      { path: '/join', element: <GetInvolved /> },
      { path: '/updates', element: <Navigate to="/news" replace /> },
      { path: '/priorities', element: <Navigate to="/#priorities" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
