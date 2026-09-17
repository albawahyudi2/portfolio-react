import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Pisahkan vendor besar ke chunk terpisah agar cached oleh browser
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          'vendor-animation': ['framer-motion'],
          'vendor-lottie': ['@lottiefiles/dotlottie-react'],
        }
      }
    },
    // Aktifkan minifikasi CSS
    cssMinify: true,
  },
  // Optimasi dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
