import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages: raeesahmed20252022-commits.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
