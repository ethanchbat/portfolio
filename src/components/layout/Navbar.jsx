import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useContent } from '../../contexts/ContentContext'
import styles from './Navbar.module.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const site = useContent('site')

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.mark} aria-label={`${site.name}, home`}>
          {site.name}
        </NavLink>

        <nav className={styles.links} aria-label="Primary">
          {site.navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>
      </div>

      {open && (
        <nav className={styles.mobilePanel} aria-label="Mobile">
          {site.navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
