import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useContent, useWorks } from '../../contexts/ContentContext'
import styles from './SelectedWork.module.css'

export function SelectedWork() {
  const content = useContent('selectedWork')
  const works = useWorks()
  const featured = works.find((w) => w.featured) ?? works[0]

  if (!featured) return null

  let hostname = featured.url
  try {
    hostname = new URL(featured.url).hostname
  } catch {
    // keep raw url if it isn't a valid absolute URL yet
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headRow}>
          <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />
          <Button to="/work" variant="ghost">
            See all work
          </Button>
        </div>

        <Reveal as="div" className={styles.card}>
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>{featured.name}</h3>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              {featured.status}
            </span>
          </div>

          <p className={styles.tagline}>{featured.tagline}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{featured.role}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Since</span>
              <span className={styles.metaValue}>{featured.year}</span>
            </div>
          </div>

          <div className={styles.cardActions}>
            <Button to={`/work/${featured.slug}`} variant="secondary">
              Read more
            </Button>
            <Button href={featured.url} variant="ghost" target="_blank" rel="noreferrer">
              Visit {hostname}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
