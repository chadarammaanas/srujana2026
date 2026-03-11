// ─────────────────────────────────────────────────────────────
//  TEMPLATE – copy this file to config.js and fill in your values.
//  config.js is gitignored so real credentials are never committed.
//  GitHub Actions injects the real values from GitHub Secrets on deploy.
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey:            "__FIREBASE_API_KEY__",
  authDomain:        "__FIREBASE_AUTH_DOMAIN__",
  projectId:         "__FIREBASE_PROJECT_ID__",
  storageBucket:     "__FIREBASE_STORAGE_BUCKET__",
  messagingSenderId: "__FIREBASE_MESSAGING_SENDER_ID__",
  appId:             "__FIREBASE_APP_ID__",
  measurementId:     "__FIREBASE_MEASUREMENT_ID__"
};
