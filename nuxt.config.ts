// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  alias: {
    "@": resolve(__dirname, "/"),
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  css: ['~/assets/main.css'],
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
