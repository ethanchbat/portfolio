import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Sets per-route document title + meta/OG description. No extra dependency needed for a site this size. */
export function useDocumentHead({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) document.title = title
    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
    }
    if (title) setMeta('og:title', title, 'property')

    return () => {
      document.title = previousTitle
    }
  }, [title, description])
}
