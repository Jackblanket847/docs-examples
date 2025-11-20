import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  envDir: "../",
  envPrefix: "PAYPAL",
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://sandbox.paypal.com:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
