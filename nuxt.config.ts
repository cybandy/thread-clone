// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url"
import { getIconCollections } from '@egoist/tailwindcss-icons'
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
  },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/supabase", "@nuxt/fonts", "@vite-pwa/nuxt", "@pinia/nuxt", "@vueuse/nuxt", "@nuxt/image", "@nuxtjs/device", '@pinia-plugin-persistedstate/nuxt'],
  ui: {
    global: true,
    icons: {
      // might solve stretch bug on generate, see https://github.com/egoist/tailwindcss-icons/issues/23
      extraProperties: {
        'mask-size': 'contain',
        'mask-position': 'center'
      },
      collections: {
        ...getIconCollections(['heroicons']),
        cybandy: {
          icons: {
            'new-post': {
              width: 24,
              height: 24,
              body: '<path d="M22.75 13L22.75 13.15C22.75 16.5103 22.75 18.1905 22.096 19.4739C21.5208 20.6029 20.6029 21.5208 19.4739 22.096C18.1905 22.75 16.5103 22.75 13.15 22.75L12.85 22.75C9.48969 22.75 7.80953 22.75 6.52606 22.096C5.39708 21.5208 4.4792 20.6029 3.90396 19.4739C3.25 18.1905 3.25 16.5103 3.25 13.15L3.25 12.85C3.25 9.48968 3.25 7.80953 3.90396 6.52606C4.4792 5.39708 5.39708 4.4792 6.52606 3.90396C7.80953 3.25 9.48968 3.25 12.85 3.25L13 3.25" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"></path>'
            }
          }
        },
        foo: {
          icons: {
            'arrow-left': {
              // svg body
              body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />',
              // svg width and height, optional
              width: 24,
              height: 24
            }
          }
        },
      }
    }
  },
  colorMode: {
    preference: 'dark'
  },
  device: {
    refreshOnResize: true
  },
  supabase: {
    // redirectOptions:{
    //   exclude:['/','/log']
    // }
    redirect: false
  },
  experimental: {
    inlineRouteRules: true
  }

})
