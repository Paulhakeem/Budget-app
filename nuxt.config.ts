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
  app: {
  head: {
  title: "Paper Router Expense Tracker"
}
  },
  
  // runtimeConfig: {
  //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
  //   public: {
  //     FIREBASE_API_KEY: process.env.FIREBASE_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
  //   }
  // },
})
