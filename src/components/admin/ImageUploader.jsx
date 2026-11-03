import styles from './admin.module.css'

/**
 * Firebase Storage needs the paid Blaze plan for new projects, so instead of
 * uploading files, this just takes a pasted URL to an image hosted anywhere
 * (Imgur, Cloudinary's free tier, GitHub, your own site, etc.) and previews it.
 */
export function ImageUploader({ value, onChange }) {
  return (
    <div>
      {value && <img src={value} alt="" className={styles.imagePreview} />}
      <div className={styles.field}>
        <input
          type="url"
          className={styles.input}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      {value && (
        <div className={styles.saveRow}>
          <button type="button" className={styles.dangerButton} onClick={() => onChange('')}>
            Remove
          </button>
        </div>
      )}
    </div>
  )
}
