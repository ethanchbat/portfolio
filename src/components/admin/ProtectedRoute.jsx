import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import styles from './admin.module.css'

export function ProtectedRoute({ children }) {
  const { user, loading, isConfigured } = useAuth()

  if (!isConfigured) {
    return (
      <div className={styles.centerScreen}>
        <div className={styles.notConfigured}>
          <p className={styles.eyebrow}>Admin</p>
          <h1 className={styles.notConfiguredTitle}>Firebase isn't configured yet.</h1>
          <p className={styles.notConfiguredText}>
            Add the <code>VITE_FIREBASE_*</code> values to <code>.env</code> and restart the dev
            server. See the README's "Admin panel setup" section for the full checklist.
          </p>
        </div>
      </div>
    )
  }

  if (loading) return null

  if (!user) return <Navigate to="/admin/login" replace />

  return children
}
