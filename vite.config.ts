import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 80
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'api': resolve(__dirname, 'src/request/api'),
      'store': resolve(__dirname, 'src/store/modules')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})