/// <reference types="vite/client" />

// Injected by Vite `define` in vite.config.ts. Holds the URL path the site is served
// under ('/~susilmohanty/' in builds, '/' in dev) — used for the router basename and
// asset URLs. We use this instead of import.meta.env.BASE_URL because
// vite-plugin-singlefile force-overrides Vite's `base` to './'.
declare const __DEPLOY_BASE__: string
