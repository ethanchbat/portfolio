import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import styles from '../../components/admin/admin.module.css'

export default function Login() {
  const { user, login, isConfigured } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  if (user) {
    const from = location.state?.from || '/admin/home'
    return <Navigate to={from} replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await login(email, password)
    } catch {
      setError('Incorrect email or password.')
    } finally {
      setSubmitting(false)
    }
  }

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

  return (
    <div className={styles.centerScreen}>
      <form className={styles.loginCard} onSubmit={handleSubmit}>
        <p className={styles.eyebrow}>Admin</p>
        <h1 className={styles.loginTitle}>Log in</h1>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <div className={styles.saveRow}>
          <button type="submit" className={styles.primaryButton} disabled={submitting}>
            {submitting ? 'Logging in…' : 'Log in'}
          </button>
          {error && <span className={`${styles.statusText} ${styles.statusError}`}>{error}</span>}
        </div>
      </form>
    </div>
  )
}
