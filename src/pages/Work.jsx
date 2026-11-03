import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { useContent, useWorks } from '../contexts/ContentContext'
import styles from './Work.module.css'

export default function Work() {
  const content = useContent('work')
  const works = useWorks()

  useDocumentHead({
    title: 'Work · Ethan Chbat',
    description:
      "Chapters, not just a company. Coursiq and what comes after it, as it's ready to be shown.",
  })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          lead={content.lead}
          wide
        />

        <div className={styles.list}>
          {works.map((work) => (
            <Reveal key={work.slug} as={Link} to={`/work/${work.slug}`} className={styles.row}>
              <div className={styles.rowLeft}>
                <span className={styles.rowYear}>{work.year}</span>
                <div>
                  <h2 className={styles.rowName}>{work.name}</h2>
                  <p className={styles.rowTagline}>{work.tagline}</p>
                </div>
              </div>
              <span className={styles.rowStatus}>{work.status}</span>
            </Reveal>
          ))}
          <div className={styles.listEnd} />
        </div>

        <Reveal as="div" className={styles.empty}>
          <p className={styles.emptyEyebrow}>{content.emptyEyebrow}</p>
          <p className={styles.emptyLine}>{content.emptyLine}</p>
        </Reveal>
      </div>
    </div>
  )
}
