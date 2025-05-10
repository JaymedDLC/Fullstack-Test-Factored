import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()], // o [vue()]
  server: {
    host: true, // equivalente a '0.0.0.0'
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
})