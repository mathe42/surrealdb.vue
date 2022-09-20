import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './lib/mod.ts',
      formats: ['es'],
      fileName: 'mod'
    },
    rollupOptions: {
      external: ['vue', 'surrealdb.js']
    },
    minify: false
  },
})
