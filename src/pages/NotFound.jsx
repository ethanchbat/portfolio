import { Button } from '../components/ui/Button'
import { useDocumentHead } from '../hooks/useDocumentHead'
import styles from './NotFound.module.css'

export default function NotFound() {
  useDocumentHead({ title: 'Page not found · Ethan Chbat' })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.heading}>This page doesn't exist.</h1>
        <p className={styles.sub}>
          Whatever you were looking for isn't here. The rest of the site is, though.
        </p>
        <Button to="/">Back to home</Button>
      </div>
    </div>
  )
}
