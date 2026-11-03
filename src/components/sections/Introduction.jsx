import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { useContent } from '../../contexts/ContentContext'
import styles from './Introduction.module.css'

export function Introduction() {
  const content = useContent('introduction')

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} wide />

        <Reveal as="div" className={styles.body} group>
          <p className={styles.lead} data-reveal-item>
            {content.lead}
          </p>
          <p className={styles.support} data-reveal-item>
            {content.support}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
