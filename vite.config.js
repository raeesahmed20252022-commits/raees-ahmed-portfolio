import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages: raeesahmed20252022-commits.github.io/raees-ahmed-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/raees-ahmed-portfolio/',
})
