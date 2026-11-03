import { SectionEditor } from '../../components/admin/SectionEditor'
import styles from '../../components/admin/admin.module.css'

export default function AdminSettings() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Site settings</h1>
      <p className={styles.pageSub}>
        Site-wide text: your name, social links, footer, and navigation labels. The pages each
        nav item links to are fixed in code, but the label text is editable.
      </p>

      <SectionEditor
        section="site"
        title="Site"
        fields={[
          { key: 'name', label: 'Your name (shown in the nav and footer)', type: 'text' },
          { key: 'footerTagline', label: 'Footer tagline', type: 'text' },
          { key: 'footerNote', label: 'Footer bottom-right note', type: 'text' },
          { key: 'email', label: 'Contact email', type: 'text' },
          { key: 'linkedin', label: 'LinkedIn URL', type: 'text' },
          { key: 'github', label: 'GitHub URL', type: 'text' },
          { key: 'description', label: 'Site description (used for SEO)', type: 'textarea' },
        ]}
        listFields={[
          {
            key: 'navItems',
            label: 'Navigation labels',
            itemType: 'object',
            defaultItem: { label: '', to: '/' },
            itemFields: [
              { key: 'to', label: 'Links to (fixed)', type: 'text', readOnly: true },
              { key: 'label', label: 'Label', type: 'text' },
            ],
          },
        ]}
      />
    </div>
  )
}
