import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useContent } from '../../contexts/ContentContext'
import styles from './BeyondTechnology.module.css'

export function BeyondTechnology() {
  const content = useContent('beyondTechnology')

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />

        <div className={styles.grid}>
          {content.panels.map((panel, i) => (
            <Reveal key={panel.key || i} as="div" className={styles.panel}>
              <div className={styles.frame}>
                <span className={styles.corner} />
                <span className={styles.corner} />
                <span className={styles.corner} />
                <span className={styles.corner} />
                <span className={styles.frameLabel}>{panel.frameLabel}</span>
              </div>
              <h3 className={styles.panelTitle}>{panel.title}</h3>
              <p className={styles.panelDesc}>{panel.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
