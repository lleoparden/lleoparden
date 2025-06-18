import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig(({ mode }) => ({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react()
  ],
  base: mode === 'development' ? '/' : '/lleoparden/',
  build: {
  outDir: 'dist',
  assetsDir: 'assets',
  rollupOptions: {
    input: {
      main: 'index.html'
    }
  }
},
  assetsInclude: ['**/*.mdx'],
}))
