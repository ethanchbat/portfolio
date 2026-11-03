import { SectionEditor } from '../../components/admin/SectionEditor'
import { SeedBanner } from '../../components/admin/SeedBanner'
import styles from '../../components/admin/admin.module.css'

export default function AdminHome() {
  return (
    <div>
      <h1 className={styles.pageTitle}>Home page</h1>
      <p className={styles.pageSub}>Every editable section on the homepage, top to bottom.</p>

      <SeedBanner />

      <SectionEditor
        section="hero"
        title="Hero"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'headline', label: 'Headline', type: 'text' },
          { key: 'sub', label: 'Subcopy', type: 'textarea' },
        ]}
      />

      <SectionEditor
        section="introduction"
        title="Introduction"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
          { key: 'lead', label: 'Lead paragraph', type: 'textarea' },
          { key: 'support', label: 'Supporting paragraph', type: 'textarea' },
        ]}
      />

      <SectionEditor
        section="selectedWork"
        title="Selected Work (header)"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
        ]}
      />

      <SectionEditor
        section="howIThink"
        title="How I Think"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
          { key: 'lead', label: 'Lead line', type: 'textarea' },
        ]}
        listFields={[
          {
            key: 'principles',
            label: 'Principles',
            itemType: 'object',
            defaultItem: { num: '0' + 5, title: '', desc: '' },
            itemFields: [
              { key: 'num', label: 'Number', type: 'text' },
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'desc', label: 'Description', type: 'textarea' },
            ],
          },
        ]}
      />

      <SectionEditor
        section="beyondTechnology"
        title="Beyond Technology"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
        ]}
        listFields={[
          {
            key: 'panels',
            label: 'Panels',
            itemType: 'object',
            defaultItem: { key: '', title: '', frameLabel: 'Opening soon', desc: '' },
            itemFields: [
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'frameLabel', label: 'Frame label', type: 'text' },
              { key: 'desc', label: 'Description', type: 'textarea' },
            ],
          },
        ]}
      />

      <SectionEditor
        section="connect"
        title="Connect (homepage teaser)"
        fields={[
          { key: 'eyebrow', label: 'Eyebrow label', type: 'text' },
          { key: 'heading', label: 'Heading', type: 'text' },
          { key: 'sub', label: 'Subcopy', type: 'textarea' },
        ]}
      />
    </div>
  )
}
