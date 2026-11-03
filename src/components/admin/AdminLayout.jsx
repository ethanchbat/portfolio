import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import styles from './admin.module.css'

const LINKS = [
  { to: '/admin/home', label: 'Home page' },
  { to: '/admin/about', label: 'About page' },
  { to: '/admin/contact', label: 'Contact page' },
  { to: '/admin/work', label: 'Work / projects' },
  { to: '/admin/settings', label: 'Site settings' },
]

export function AdminLayout() {
  const { logout } = useAuth()

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>Admin</div>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <div className={styles.sidebarSpacer} />
        <a className={styles.viewSiteLink} href="/" target="_blank" rel="noreferrer">
          View live site ↗
        </a>
        <button type="button" className={styles.logoutButton} onClick={() => logout()}>
          Log out
        </button>
      </aside>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}
