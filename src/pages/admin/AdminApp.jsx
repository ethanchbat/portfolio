import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../../components/admin/ProtectedRoute'
import { AdminLayout } from '../../components/admin/AdminLayout'
import { AuthProvider } from '../../contexts/AuthContext'

const Login = lazy(() => import('./Login'))
const AdminHome = lazy(() => import('./Home'))
const AdminAbout = lazy(() => import('./About'))
const AdminContact = lazy(() => import('./Contact'))
const AdminWork = lazy(() => import('./Work'))
const AdminWorkEditor = lazy(() => import('./WorkEditor'))
const AdminSettings = lazy(() => import('./Settings'))

export default function AdminApp() {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="work" element={<AdminWork />} />
            <Route path="work/new" element={<AdminWorkEditor />} />
            <Route path="work/:slug" element={<AdminWorkEditor />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  )
}
