import { SectionEditor } from '../../components/admin/SectionEditor'
import styles from '../../components/admin/admin.module.css'

export default function AdminAbout() {
  return (
    <div>
      <h1 className={styles.pageTitle}>About page</h1>
      <p className={styles.pageSub}>The bio page copy.</p>

      <SectionEditor
        section="about"
        title="About"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
        ]}
        listFields={[
          {
            key: 'paragraphs',
            label: 'Paragraphs',
            itemType: 'string',
            defaultItem: '',
          },
        ]}
      />
    </div>
  )
}
