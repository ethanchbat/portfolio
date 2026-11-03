# ethanchbat.com

Personal site, built with React 19 + Vite, React Router, and GSAP. Content (text, projects) is
editable live through a password-protected `/admin` panel backed by Firebase.

```
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run deploy   # publish dist/ to GitHub Pages via gh-pages
```

Without Firebase configured, the site runs fine on default content (`src/lib/content/defaults.js`)
and `/admin` shows a "not configured yet" message instead of a login form.

## Admin panel setup

The admin panel needs a Firebase project (Auth + Firestore). GitHub Pages only serves static
files, so this is the one part that can't be automated — it happens once, in the Firebase
Console, tied to your Google account.

No Firebase Storage: as of late 2024, new Firebase projects need the paid Blaze plan to use
Storage at all, even within its free tier. Rather than require that, project images in the admin
are just pasted URLs — host the image anywhere (Imgur, Cloudinary's free tier, your own site,
etc.) and paste the link in.

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a project
   (any name).
2. **Build → Authentication → Get started → Email/Password** → enable it.
3. Still in Authentication, go to the **Users** tab → **Add user** → enter the email/password
   you want to log into `/admin` with. This is your only admin account — there's no sign-up flow
   anywhere in the app.
4. **Build → Firestore Database → Create database** → production mode → pick any region.
5. **Project settings (gear icon) → General → Your apps → Add app → Web (`</>`)** → register it
   (any nickname, no need for Firebase Hosting) → copy the `firebaseConfig` object it shows you.
6. Paste those values into `.env` (see `.env.example`):
   `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`,
   `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`.
7. In Authentication → Users, copy the **User UID** of the account you created in step 3. Paste it
   over `REPLACE_WITH_YOUR_ADMIN_UID` in `firestore.rules`. This is what restricts writes to just
   you — UIDs aren't secret, it's fine for this file to be committed.
8. Publish the rules. Either:
   - Paste the contents of `firestore.rules` into Console → Firestore Database → **Rules** tab →
     Publish, or
   - Run `npx firebase-tools login`, then `npx firebase-tools deploy --only firestore:rules`.
9. Restart `npm run dev`, go to `/admin/login`, log in with the account from step 3.
10. On first login you'll see a **"Set up starting content"** banner — click **Seed defaults**
    once. That writes the current site copy into Firestore so you have something to edit instead
    of a blank form. After that, every section on every page is editable from the sidebar:
    **Home · About · Contact · Work / projects · Site settings**.

## Content model

- `src/lib/content/defaults.js` — fallback copy, used before Firebase is configured, while
  content is loading, or for any section you haven't edited yet. Also what "Seed defaults" writes.
- Firestore `content` collection — one doc per section (`hero`, `introduction`, `about`, etc.),
  edited from the admin sidebar.
- Firestore `works` collection — one doc per project (Coursiq and anything you add later), slug as
  the doc ID. Managed from **Work / projects** in the admin, including add/edit/delete/reorder and
  an image URL field.
- `src/contexts/ContentContext.jsx` — fetches both on load and exposes `useContent(section)` /
  `useWorks()` to every page, plus the write functions the admin forms call.

The visual design (colors, type, spacing, layout) is not part of the admin panel — that stays in
code, same as before.
