import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Arabic_Servicsc_Center/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // قسم الحزم لتقليل الحجم
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // زيادة الحد الأقصى لحجم التحذير
  }
})
