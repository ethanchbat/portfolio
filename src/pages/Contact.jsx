import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { useContent } from '../contexts/ContentContext'
import { useDocumentHead } from '../hooks/useDocumentHead'
import styles from './Contact.module.css'

export default function Contact() {
  const content = useContent('contact')
  const site = useContent('site')
  const form = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useDocumentHead({
    title: 'Connect · Ethan Chbat',
    description: 'Start a conversation with Ethan Chbat.',
  })

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('sent')
          setValues({ name: '', email: '', message: '' })
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          lead={content.lead}
        />

        <div className={styles.grid}>
          <form className={styles.form} ref={form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                value={values.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                value={values.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div className={styles.submitRow}>
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              <span
                className={`${styles.status} ${status === 'error' ? styles.statusError : ''}`}
                role="status"
                aria-live="polite"
              >
                {status === 'sent' && content.successMessage}
                {status === 'error' && content.errorMessage}
              </span>
            </div>
          </form>
        </div>

        <div className={styles.directRow}>
          <span className={styles.directLabel}>{content.directLabel}</span>
          <div className={styles.directLinks}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
