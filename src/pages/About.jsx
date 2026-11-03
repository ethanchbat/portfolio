import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useDocumentHead } from '../hooks/useDocumentHead'
import { useContent } from '../contexts/ContentContext'
import styles from './About.module.css'

export default function About() {
  const content = useContent('about')

  useDocumentHead({
    title: 'About · Ethan Chbat',
    description:
      'Founder, builder, and creative thinker working at the intersection of technology, design, and entrepreneurship.',
  })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={content.eyebrow} heading={content.heading} />

        <Reveal as="div" className={styles.body} group>
          {content.paragraphs.map((p, i) => (
            <p key={i} data-reveal-item>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </div>
  )
}
