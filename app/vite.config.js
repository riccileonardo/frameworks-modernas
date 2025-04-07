import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify' // se estiver usando Vuetify

export default defineConfig({
  base: '/frameworks-modernas/', // 👈 ESSENCIAL PARA GITHUB PAGES
  plugins: [
    vue(),
    vueDevTools(),
    vuetify(), // 👈 ative se estiver usando Vuetify
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
