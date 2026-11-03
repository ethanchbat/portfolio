import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/fonts.css'
import './styles/global.css'

// GitHub Pages serves no server-side rewrites, so a direct hit on a nested
// route (e.g. /work/coursiq) 404s before React Router ever sees it.
// public/404.html stashes the attempted path in sessionStorage and redirects
// to '/'. Restore it here, before the router reads location.
const redirect = sessionStorage.getItem('spa-redirect')
if (redirect) {
  sessionStorage.removeItem('spa-redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
