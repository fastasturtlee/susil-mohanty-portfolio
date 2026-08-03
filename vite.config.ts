import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Deploy path: the production site lives at https://home.iitj.ac.in/~susilmohanty/,
// the dev server at root.
const DEPLOY_BASE = '/~susilmohanty/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // NOTE: We intentionally do NOT rely on Vite's `base` / import.meta.env.BASE_URL for
  // the router basename or asset URLs. vite-plugin-singlefile force-overrides `base` to
  // './' (see node_modules/vite-plugin-singlefile — `config.base = "./"`), which is
  // correct for a portable single-file bundle but makes BASE_URL './'. Deriving the
  // React Router basename from that yields '.', which matches no route → blank screen.
  // Instead we inject the real deploy path via `define`, which the plugin cannot clobber.
  define: {
    __DEPLOY_BASE__: JSON.stringify(command === 'build' ? DEPLOY_BASE : '/'),
  },
}))
