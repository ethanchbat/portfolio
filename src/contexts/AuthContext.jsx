/* eslint-disable react-refresh/only-export-components -- context + hook are intentionally co-located */
import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { isFirebaseConfigured } from '../lib/firebase'
import { auth } from '../lib/firebaseAuth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(isFirebaseConfigured)

  useEffect(() => {
    if (!auth) return
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const login = (email, password) => {
    if (!auth) return Promise.reject(new Error('Firebase is not configured.'))
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    if (!auth) return Promise.resolve()
    return signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isConfigured: isFirebaseConfigured }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
