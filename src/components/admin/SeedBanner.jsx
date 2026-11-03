import { useState } from 'react'
import { useContentAdmin } from '../../contexts/ContentContext'
import styles from './admin.module.css'

export function SeedBanner() {
  const { missingSections, usingDefaultWorks, seedDefaults } = useContentAdmin()
  const [status, setStatus] = useState('idle')

  const nothingToSeed = missingSections.length === 0 && !usingDefaultWorks
  if (nothingToSeed) return null

  const handleSeed = async () => {
    setStatus('seeding')
    try {
      await seedDefaults()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Set up starting content</h2>
      <p className={styles.statusText} style={{ marginBottom: '1rem' }}>
        Some sections don't have saved content in Firestore yet, so the live site is showing
        default copy. Click below once to write that default copy into Firestore as a starting
        point you can then edit here.
      </p>
      <div className={styles.saveRow}>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={handleSeed}
          disabled={status === 'seeding'}
        >
          {status === 'seeding' ? 'Seeding…' : 'Seed defaults'}
        </button>
        {status === 'done' && <span className={styles.statusText}>Done.</span>}
        {status === 'error' && (
          <span className={`${styles.statusText} ${styles.statusError}`}>
            Something went wrong. Check Firestore rules and try again.
          </span>
        )}
      </div>
    </div>
  )
}
