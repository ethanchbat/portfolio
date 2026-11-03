import { Link } from 'react-router-dom'
import { useContentAdmin } from '../../contexts/ContentContext'
import { SectionEditor } from '../../components/admin/SectionEditor'
import styles from '../../components/admin/admin.module.css'

export default function AdminWork() {
  const { works, saveWork } = useContentAdmin()

  const move = async (index, direction) => {
    const target = index + direction
    if (target < 0 || target >= works.length) return
    const a = works[index]
    const b = works[target]
    await Promise.all([
      saveWork(a.slug, { ...a, order: b.order }),
      saveWork(b.slug, { ...b, order: a.order }),
    ])
  }

  return (
    <div>
      <h1 className={styles.pageTitle}>Work / projects</h1>
      <p className={styles.pageSub}>
        Coursiq and any future chapters. Add, edit, remove, or reorder what shows up on{' '}
        <code>/work</code>.
      </p>

      <div className={styles.card}>
        <div className={styles.listHead}>
          <h2 className={styles.cardTitle} style={{ marginBottom: 0 }}>
            Projects
          </h2>
          <Link to="/admin/work/new" className={styles.smallButton}>
            Add project
          </Link>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Featured</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {works.map((work, i) => (
              <tr key={work.slug}>
                <td>
                  <div className={styles.rowActions}>
                    <button
                      type="button"
                      className={styles.smallButton}
                      onClick={() => move(i, -1)}
                      disabled={i === 0}
                      aria-label="Move up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className={styles.smallButton}
                      onClick={() => move(i, 1)}
                      disabled={i === works.length - 1}
                      aria-label="Move down"
                    >
                      ↓
                    </button>
                  </div>
                </td>
                <td>{work.name}</td>
                <td>{work.status}</td>
                <td>{work.featured ? 'Yes' : ''}</td>
                <td>
                  <Link to={`/admin/work/${work.slug}`} className={styles.smallButton}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionEditor
        section="work"
        title="Work page header"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
          { key: 'lead', label: 'Lead line', type: 'textarea' },
          { key: 'emptyEyebrow', label: '"More chapters" eyebrow', type: 'text' },
          { key: 'emptyLine', label: '"More chapters" body line', type: 'textarea' },
        ]}
      />
    </div>
  )
}
