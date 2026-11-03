import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Attaches a scroll-triggered fade/rise reveal to the returned ref.
 * If the ref's element carries `data-reveal-group`, children marked
 * `data-reveal-item` are staggered instead of the container itself.
 * No-ops entirely under prefers-reduced-motion.
 */
export function useReveal({ y = 28, delay = 0, duration = 0.9, stagger = 0.08 } = {}) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!ref.current || reduced) return

      const isGroup = ref.current.hasAttribute('data-reveal-group')
      const targets = isGroup ? ref.current.querySelectorAll('[data-reveal-item]') : ref.current

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          stagger: isGroup ? stagger : 0,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    },
    { dependencies: [reduced], scope: ref }
  )

  return ref
}
