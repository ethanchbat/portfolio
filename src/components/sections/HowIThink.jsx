import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useContent } from '../../contexts/ContentContext'
import styles from './HowIThink.module.css'

export function HowIThink() {
  const content = useContent('howIThink')

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} lead={content.lead} />

        <div className={styles.grid}>
          {content.principles.map((p) => (
            <Reveal key={p.num} as="div" className={styles.item}>
              <span className={styles.num}>{p.num}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
