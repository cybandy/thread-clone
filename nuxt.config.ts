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
  modules: ["@nuxt/ui", "@nuxt/eslint", // "@nuxtjs/supabase",
    "@nuxt/fonts", "@vite-pwa/nuxt", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image", "@nuxtjs/device"],
  ui: {
    global: true
  },
  colorMode: {
    preference: 'dark'
  },
  device: {
    refreshOnResize: true
  }

})
