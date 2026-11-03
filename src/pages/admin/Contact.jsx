import { SectionEditor } from '../../components/admin/SectionEditor'
import styles from '../../components/admin/admin.module.css'

export default function AdminContact() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Contact page</h1>
      <p className={styles.pageSub}>
        The contact form's copy. The form fields themselves, and where submissions are sent
        (EmailJS), aren't editable here.
      </p>

      <SectionEditor
        section="contact"
        title="Contact"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
          { key: 'lead', label: 'Lead line', type: 'textarea' },
          { key: 'directLabel', label: '"Or reach out directly" label', type: 'text' },
          { key: 'successMessage', label: 'Message after a successful send', type: 'text' },
          { key: 'errorMessage', label: 'Message after a failed send', type: 'text' },
        ]}
      />
    </div>
  )
}
