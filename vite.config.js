import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // name : path to npm folder
      // 'mobile-menu_scss': '../../scss/components/header/_mobile-menu.scss',
    }
  },
  server: {
    host: true
  },
})
