import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
        plugins: [
            // require('autoprefixer'), // 如果需要autoprefixer
            autoprefixer()
        ],
    },
},
server: {
  proxy: {
    '/register': {
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/login':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/adminLogin':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/userList':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/uploudVideo':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/uploudImg':{
      target: 'http://localhost:3000',
      changeOrigin: true
    }
    ,
    '/videoList':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/addVideo':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/delVideo':{
      target: 'http://localhost:3000',
      changeOrigin: true
    },
    '/banUser':{
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
  
}
})

