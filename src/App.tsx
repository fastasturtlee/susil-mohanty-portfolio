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

// From vite.config.ts `define`: '/' in dev, '/~susilmohanty/' in prod. (We can't use
// import.meta.env.BASE_URL here — vite-plugin-singlefile forces it to './', which would
// make the basename '.' and match no route → blank screen.)
// Remove trailing slash; fall back to '/' so the router always has a valid basename.
const basename = __DEPLOY_BASE__.replace(/\/$/, '') || '/'

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
