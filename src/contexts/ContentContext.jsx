/* eslint-disable react-refresh/only-export-components -- context + hooks are intentionally co-located */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore/lite'
import { db, isFirebaseConfigured } from '../lib/firebase'
import { defaultContent, defaultWorks } from '../lib/content/defaults'

const ContentContext = createContext(null)

export function ContentProvider({ children }) {
  const [contentDocs, setContentDocs] = useState({})
  const [workDocs, setWorkDocs] = useState(null)
  const [loading, setLoading] = useState(isFirebaseConfigured)

  useEffect(() => {
    if (!db) return
    let cancelled = false

    Promise.all([
      getDocs(collection(db, 'content')).catch(() => null),
      getDocs(query(collection(db, 'works'), orderBy('order', 'asc'))).catch(() => null),
    ]).then(([contentSnap, worksSnap]) => {
      if (cancelled) return
      if (contentSnap) {
        const next = {}
        contentSnap.forEach((d) => {
          next[d.id] = d.data()
        })
        setContentDocs(next)
      }
      if (worksSnap) {
        setWorkDocs(worksSnap.docs.map((d) => ({ id: d.id, ...d.data() })))
      }
      setLoading(false)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const content = useMemo(() => ({ ...defaultContent, ...contentDocs }), [contentDocs])

  const works = workDocs && workDocs.length > 0 ? workDocs : defaultWorks
  const usingDefaultWorks = !(workDocs && workDocs.length > 0)

  const missingSections = useMemo(
    () => Object.keys(defaultContent).filter((key) => !contentDocs[key]),
    [contentDocs]
  )

  const updateContent = async (section, data) => {
    if (!db) throw new Error('Firebase is not configured.')
    await setDoc(doc(db, 'content', section), data)
    setContentDocs((prev) => ({ ...prev, [section]: data }))
  }

  const saveWork = async (slug, data) => {
    if (!db) throw new Error('Firebase is not configured.')
    await setDoc(doc(db, 'works', slug), data)
    setWorkDocs((prev) => {
      const list = prev ? [...prev] : []
      const idx = list.findIndex((w) => w.slug === slug)
      const next = { id: slug, ...data }
      if (idx === -1) list.push(next)
      else list[idx] = next
      return list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    })
  }

  const deleteWork = async (slug) => {
    if (!db) throw new Error('Firebase is not configured.')
    await deleteDoc(doc(db, 'works', slug))
    setWorkDocs((prev) => (prev ? prev.filter((w) => w.slug !== slug) : prev))
  }

  const seedDefaults = async () => {
    if (!db) throw new Error('Firebase is not configured.')
    await Promise.all(
      Object.entries(defaultContent).map(([section, data]) => setDoc(doc(db, 'content', section), data))
    )
    setContentDocs((prev) => ({ ...defaultContent, ...prev }))

    if (!workDocs || workDocs.length === 0) {
      await Promise.all(defaultWorks.map((work) => setDoc(doc(db, 'works', work.slug), work)))
      setWorkDocs(defaultWorks.map((w) => ({ id: w.slug, ...w })))
    }
  }

  return (
    <ContentContext.Provider
      value={{
        content,
        works,
        usingDefaultWorks,
        loading,
        missingSections,
        updateContent,
        saveWork,
        deleteWork,
        seedDefaults,
        isConfigured: isFirebaseConfigured,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

function useContentState() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('Content hooks must be used within ContentProvider')
  return ctx
}

export function useContent(section) {
  const { content } = useContentState()
  return content[section]
}

export function useWorks() {
  const { works } = useContentState()
  return works
}

export function useContentAdmin() {
  return useContentState()
}
