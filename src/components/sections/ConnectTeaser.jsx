import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'
import { useContent } from '../../contexts/ContentContext'
import styles from './ConnectTeaser.module.css'

export function ConnectTeaser() {
  const content = useContent('connect')
  const site = useContent('site')

  return (
    <section className={styles.section}>
      <Reveal as="div" className={styles.inner}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 className={styles.heading}>{content.heading}</h2>
        <p className={styles.sub}>{content.sub}</p>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.ctaPrimary}>
            Start a conversation →
          </Link>
        </div>
        <div className={styles.social}>
          <a href={`mailto:${site.email}`} aria-label="Email Ethan">
            <FaEnvelope />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Ethan on LinkedIn">
            <FaLinkedin />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="Ethan on GitHub">
            <FaGithub />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
