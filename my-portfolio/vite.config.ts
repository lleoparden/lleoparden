import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react()
  ],
  // This base is important for GitHub Pages deployment
  // Replace 'my-portfolio' with your actual repository name
  base: '/my-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  // Enable importing .mdx files
  assetsInclude: ['**/*.mdx'],
})