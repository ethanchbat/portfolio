import { useEffect, useState } from 'react'
import { useContent, useContentAdmin } from '../../contexts/ContentContext'
import styles from './admin.module.css'

/**
 * Generic editor for one `content/{section}` doc.
 * `fields`: flat string fields -> [{ key, label, type: 'text' | 'textarea' }]
 * `listFields`: array fields -> [{
 *   key, label, itemType: 'string' | 'object',
 *   itemFields (object only): [{ key, label, type, readOnly }],
 *   defaultItem,
 * }]
 */
export function SectionEditor({ section, title, fields = [], listFields = [] }) {
  const current = useContent(section)
  const { updateContent } = useContentAdmin()
  const [values, setValues] = useState(current)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    setValues(current)
  }, [current])

  const setField = (key, val) => setValues((v) => ({ ...v, [key]: val }))

  const setListItem = (key, index, next) => {
    setValues((v) => {
      const list = [...(v[key] || [])]
      list[index] = next
      return { ...v, [key]: list }
    })
  }

  const addListItem = (key, defaultItem) => {
    setValues((v) => ({ ...v, [key]: [...(v[key] || []), defaultItem] }))
  }

  const removeListItem = (key, index) => {
    setValues((v) => {
      const list = [...(v[key] || [])]
      list.splice(index, 1)
      return { ...v, [key]: list }
    })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setStatus('saving')
    try {
      await updateContent(section, values)
      setStatus('saved')
      setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('error')
    }
  }

  if (!values) return null

  return (
    <form onSubmit={handleSave} className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>

      {fields.map((f) => (
        <div key={f.key} className={styles.field}>
          <label className={styles.label} htmlFor={`${section}-${f.key}`}>
            {f.label}
          </label>
          {f.type === 'textarea' ? (
            <textarea
              id={`${section}-${f.key}`}
              className={styles.textarea}
              rows={4}
              value={values[f.key] || ''}
              onChange={(e) => setField(f.key, e.target.value)}
            />
          ) : (
            <input
              id={`${section}-${f.key}`}
              className={styles.input}
              value={values[f.key] || ''}
              onChange={(e) => setField(f.key, e.target.value)}
            />
          )}
        </div>
      ))}

      {listFields.map((lf) => (
        <div key={lf.key} className={styles.listBlock}>
          <div className={styles.listHead}>
            <span className={styles.label}>{lf.label}</span>
            <button
              type="button"
              className={styles.smallButton}
              onClick={() => addListItem(lf.key, lf.defaultItem)}
            >
              Add
            </button>
          </div>

          {(values[lf.key] || []).map((item, i) =>
            lf.itemType === 'string' ? (
              <div key={i} className={styles.listItem}>
                <textarea
                  className={styles.textarea}
                  rows={2}
                  value={item}
                  onChange={(e) => setListItem(lf.key, i, e.target.value)}
                />
                <div className={styles.saveRow}>
                  <button
                    type="button"
                    className={styles.dangerButton}
                    onClick={() => removeListItem(lf.key, i)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div key={i} className={styles.listItem}>
                {lf.itemFields.map((itf) => (
                  <div key={itf.key} className={styles.field}>
                    <label className={styles.subLabel}>{itf.label}</label>
                    {itf.readOnly ? (
                      <span className={styles.readOnly}>{item[itf.key]}</span>
                    ) : itf.type === 'textarea' ? (
                      <textarea
                        className={styles.textarea}
                        rows={2}
                        value={item[itf.key] || ''}
                        onChange={(e) =>
                          setListItem(lf.key, i, { ...item, [itf.key]: e.target.value })
                        }
                      />
                    ) : (
                      <input
                        className={styles.input}
                        value={item[itf.key] || ''}
                        onChange={(e) =>
                          setListItem(lf.key, i, { ...item, [itf.key]: e.target.value })
                        }
                      />
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.dangerButton}
                  onClick={() => removeListItem(lf.key, i)}
                >
                  Remove
                </button>
              </div>
            )
          )}
        </div>
      ))}

      <div className={styles.saveRow}>
        <button type="submit" className={styles.primaryButton} disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving…' : 'Save changes'}
        </button>
        {status === 'saved' && <span className={styles.statusText}>Saved.</span>}
        {status === 'error' && (
          <span className={`${styles.statusText} ${styles.statusError}`}>
            Something went wrong. Try again.
          </span>
        )}
      </div>
    </form>
  )
}
