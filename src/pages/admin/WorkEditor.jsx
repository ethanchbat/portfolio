import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContentAdmin } from '../../contexts/ContentContext'
import { ImageUploader } from '../../components/admin/ImageUploader'
import styles from '../../components/admin/admin.module.css'

const BLANK = {
  slug: '',
  name: '',
  tagline: '',
  status: 'In development',
  year: '',
  role: 'Founder',
  url: '',
  featured: false,
  imageUrl: '',
  summary: '',
  note: '',
}

export default function AdminWorkEditor() {
  const { slug } = useParams()
  const isNew = !slug || slug === 'new'
  const navigate = useNavigate()
  const { works, saveWork, deleteWork } = useContentAdmin()

  const existing = !isNew ? works.find((w) => w.slug === slug) : null
  const [values, setValues] = useState(existing || BLANK)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (existing) setValues(existing)
  }, [existing])

  const setField = (key, val) => setValues((v) => ({ ...v, [key]: val }))

  const handleSave = async (e) => {
    e.preventDefault()
    if (!values.slug.trim()) {
      setError('Slug is required (used in the URL, e.g. "coursiq").')
      return
    }
    setStatus('saving')
    setError(null)
    try {
      const order = isNew ? works.length : existing?.order ?? works.length
      await saveWork(values.slug.trim(), { ...values, order })
      navigate('/admin/work')
    } catch {
      setError('Something went wrong saving this project.')
      setStatus('idle')
    }
  }

  const handleDelete = async () => {
    if (!existing) return
    if (!window.confirm(`Delete "${existing.name}"? This can't be undone.`)) return
    await deleteWork(existing.slug)
    navigate('/admin/work')
  }

  return (
    <div>
      <h1 className={styles.pageTitle}>{isNew ? 'Add project' : `Edit ${existing?.name ?? slug}`}</h1>

      <form onSubmit={handleSave} className={styles.card}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="slug">
            Slug (used in the URL: /work/slug)
          </label>
          <input
            id="slug"
            className={styles.input}
            value={values.slug}
            onChange={(e) => setField('slug', e.target.value)}
            disabled={!isNew}
            placeholder="coursiq"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={styles.input}
            value={values.name}
            onChange={(e) => setField('name', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="tagline">
            Tagline
          </label>
          <textarea
            id="tagline"
            className={styles.textarea}
            rows={2}
            value={values.tagline}
            onChange={(e) => setField('tagline', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="status">
            Status badge (e.g. "In development", "Live")
          </label>
          <input
            id="status"
            className={styles.input}
            value={values.status}
            onChange={(e) => setField('status', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="year">
            Year (e.g. "2025–")
          </label>
          <input
            id="year"
            className={styles.input}
            value={values.year}
            onChange={(e) => setField('year', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="role">
            Your role
          </label>
          <input
            id="role"
            className={styles.input}
            value={values.role}
            onChange={(e) => setField('role', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="url">
            External URL
          </label>
          <input
            id="url"
            className={styles.input}
            value={values.url}
            onChange={(e) => setField('url', e.target.value)}
            placeholder="https://"
          />
        </div>

        <div className={styles.toggleRow}>
          <input
            id="featured"
            type="checkbox"
            checked={Boolean(values.featured)}
            onChange={(e) => setField('featured', e.target.checked)}
          />
          <label htmlFor="featured">Feature on the homepage</label>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="summary">
            Summary
          </label>
          <textarea
            id="summary"
            className={styles.textarea}
            rows={4}
            value={values.summary}
            onChange={(e) => setField('summary', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="note">
            Footnote (shown in italics)
          </label>
          <textarea
            id="note"
            className={styles.textarea}
            rows={3}
            value={values.note}
            onChange={(e) => setField('note', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <span className={styles.label}>Image URL</span>
          <ImageUploader value={values.imageUrl} onChange={(url) => setField('imageUrl', url)} />
        </div>

        <div className={styles.saveRow}>
          <button type="submit" className={styles.primaryButton} disabled={status === 'saving'}>
            {status === 'saving' ? 'Saving…' : 'Save project'}
          </button>
          {!isNew && (
            <button type="button" className={styles.dangerButton} onClick={handleDelete}>
              Delete project
            </button>
          )}
          {error && <span className={`${styles.statusText} ${styles.statusError}`}>{error}</span>}
        </div>
      </form>
    </div>
  )
}
