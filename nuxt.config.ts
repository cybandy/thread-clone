// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url"
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: 'threads.local',
    port: 443,
    https: {
      key: './ssl/threads.local-key.pem',
      cert: './ssl/threads.local.pem'
    }
  },
  css: ['~/assets/css/main.css'],
  alias: {
    '#cy/types': fileURLToPath(new URL('./types/index.ts', import.meta.url)),
    // "~": "/<srcDir>",
    // "@": "/<srcDir>",
    // "~~": "/<rootDir>",
    // "@@": "/<rootDir>",
    // "assets": "/<srcDir>/assets",
    // "public": "/<srcDir>/public"
  },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/fonts", // "@nuxtjs/supabase",
    "@vite-pwa/nuxt", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  ui: {
    global: true
  },
  colorMode: {
    preference: 'dark'
  }

})
