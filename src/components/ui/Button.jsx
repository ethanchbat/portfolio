import { Link } from 'react-router-dom'
import styles from './Button.module.css'

/**
 * Polymorphic CTA: renders a router <Link> when `to` is set, a plain
 * <a> when `href` is set, otherwise a <button>. One visual language
 * (variant: primary | secondary | ghost) across every surface.
 */
export function Button({ variant = 'primary', to, href, className = '', children, ...rest }) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()
  const content =
    variant === 'ghost' ? (
      <>
        <span>{children}</span>
        <span className={styles.icon} aria-hidden="true">
          →
        </span>
      </>
    ) : (
      children
    )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
