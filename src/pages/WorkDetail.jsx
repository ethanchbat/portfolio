import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { useWorks } from '../contexts/ContentContext'
import styles from './WorkDetail.module.css'

export default function WorkDetail() {
  const { slug } = useParams()
  const works = useWorks()
  const work = works.find((w) => w.slug === slug)

  useDocumentHead({
    title: work ? `${work.name} · Ethan Chbat` : 'Work · Ethan Chbat',
    description: work?.tagline,
  })

  if (!work) {
    return <Navigate to="/work" replace />
  }

  let hostname = null
  if (work.url) {
    try {
      hostname = new URL(work.url).hostname
    } catch {
      hostname = work.url
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <Link to="/work" className={styles.back}>
          ← All work
        </Link>

        <Reveal as="div" className={styles.top}>
          <h1 className={styles.name}>{work.name}</h1>
          <span className={styles.status}>{work.status}</span>
        </Reveal>

        <p className={styles.tagline}>{work.tagline}</p>

        {work.imageUrl && (
          <img src={work.imageUrl} alt={work.name} className={styles.image} />
        )}

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Role</span>
            <span className={styles.metaValue}>{work.role}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Since</span>
            <span className={styles.metaValue}>{work.year}</span>
          </div>
        </div>

        <p className={styles.summary}>{work.summary}</p>
        {work.note && <p className={styles.note}>{work.note}</p>}

        <div className={styles.actions}>
          {hostname && (
            <Button href={work.url} target="_blank" rel="noreferrer">
              Visit {hostname}
            </Button>
          )}
          <Button to="/work" variant="secondary">
            Back to all work
          </Button>
        </div>
      </div>
    </div>
  )
}
