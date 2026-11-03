import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Button } from '../ui/Button'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useContent } from '../../contexts/ContentContext'
import styles from './Hero.module.css'

export function Hero() {
  const scope = useRef(null)
  const reduced = usePrefersReducedMotion()
  const content = useContent('hero')

  const words = content.headline.trim().split(/\s+/)
  const emphasis = words.pop()

  useGSAP(
    () => {
      if (reduced) return
      gsap
        .timeline({ delay: 0.15 })
        .fromTo(
          '[data-word]',
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.06 }
        )
        .fromTo(
          '[data-fade]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12 },
          '-=0.3'
        )
    },
    { scope, dependencies: [reduced, content.headline] }
  )

  return (
    <section className={`${styles.hero} grain`} ref={scope}>
      <div className={styles.inner}>
        <p className={styles.eyebrow} data-fade style={reduced ? undefined : { opacity: 0 }}>
          <span className={styles.dot} />
          <span className={styles.eyebrowText}>{content.eyebrow}</span>
        </p>

        <h1 className={styles.headline}>
          {words.map((word, i) => (
            <span key={i}>
              <span className={styles.lineMask}>
                <span className={styles.word} data-word>
                  {word}
                </span>
              </span>{' '}
            </span>
          ))}
          <span className={styles.lineMask}>
            <span className={styles.word} data-word>
              <em>{emphasis}</em>
            </span>
          </span>
        </h1>

        <p className={styles.sub} data-fade style={reduced ? undefined : { opacity: 0 }}>
          {content.sub}
        </p>

        <div className={styles.actions} data-fade style={reduced ? undefined : { opacity: 0 }}>
          <Button to="/work">See the work</Button>
          <Button to="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
