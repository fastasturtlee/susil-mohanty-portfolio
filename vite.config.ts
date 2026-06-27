import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // In dev, serve from root. In production, the site lives at /~susilmohanty/.
  // This also sets import.meta.env.BASE_URL, which App.tsx uses for the router basename.
  base: mode === 'production' ? '/~susilmohanty/' : '/',
}))
