import { initializeApp, getApps } from 'firebase/app'
// Firestore Lite: no realtime listeners / offline cache, ~10x smaller than
// the full SDK. The public site only needs a one-time read on load and the
// admin panel only needs simple reads/writes, so the realtime engine would
// be dead weight shipped to every visitor.
import { getFirestore } from 'firebase/firestore/lite'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId)

// Only firebase/app + firestore load as part of the public bundle — the
// public site only ever reads content. firebase/auth is only pulled in by
// the (already lazy-loaded) admin routes, see lib/firebaseAuth.js. No
// firebase/storage — Storage requires the paid Blaze plan, so project
// images are just pasted URLs instead (see ImageUploader.jsx).
export const app = isFirebaseConfigured ? getApps()[0] ?? initializeApp(config) : null

export const db = app ? getFirestore(app) : null
