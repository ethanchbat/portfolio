import { useLayoutEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    if (!ref.current || reduced) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out' }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <div ref={ref} key={location.pathname}>
      {outlet}
    </div>
  )
}
