import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BlockchainBackground from './components/layout/BlockchainBackground'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResearchPage from './pages/ResearchPage'
import PublicationsPage from './pages/PublicationsPage'
import TeachingPage from './pages/TeachingPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <BlockchainBackground />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

// Derived from vite.config.ts `base`: '/' in dev, '/~susilmohanty/' in prod.
// Remove trailing slash; fall back to '/' so the router always has a valid basename.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'research', element: <ResearchPage /> },
        { path: 'publications', element: <PublicationsPage /> },
        { path: 'teaching', element: <TeachingPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename },
)

export default function App() {
  return <RouterProvider router={router} />
}
