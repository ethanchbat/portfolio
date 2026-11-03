import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PageTransition } from './components/layout/PageTransition'
import { ErrorBoundary } from './components/layout/ErrorBoundary'
import { ContentProvider } from './contexts/ContentContext'

const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const WorkDetail = lazy(() => import('./pages/WorkDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AdminApp = lazy(() => import('./pages/admin/AdminApp'))

function PublicSite() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route element={<PageTransition />}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:slug" element={<WorkDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ContentProvider>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/admin/*" element={<AdminApp />} />
            <Route path="/*" element={<PublicSite />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </ContentProvider>
  )
}

export default App
