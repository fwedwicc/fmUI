import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fmUI/",
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
