import styles from './SectionHeading.module.css'

export function SectionHeading({ eyebrow, heading, lead, wide = false, as = 'h2' }) {
  const As = as
  return (
    <div className={`${styles.wrap} ${wide ? styles.wide : ''}`}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowText}>{eyebrow}</span>
        </p>
      )}
      <As className={styles.heading}>{heading}</As>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
