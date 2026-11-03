import { Link } from 'react-router-dom'
import { useContent } from '../../contexts/ContentContext'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()
  const site = useContent('site')

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.mark}>
            {site.name}
            <div className={styles.markLine}>{site.footerTagline}</div>
          </div>

          <div className={styles.columns}>
            <div>
              <p className={styles.colTitle}>Site</p>
              <div className={styles.colLinks}>
                {site.navItems.map((item) => (
                  <Link key={item.to} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className={styles.colTitle}>Elsewhere</p>
              <div className={styles.colLinks}>
                <a href={`mailto:${site.email}`}>Email</a>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={site.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {site.name}
          </span>
          <span>{site.footerNote}</span>
        </div>
      </div>
    </footer>
  )
}
