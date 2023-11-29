// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
