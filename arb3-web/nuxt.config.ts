// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: "netlify_edge",
  },
  routeRules: {
    '/': { prerender: true },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "vuetify-nuxt-module",
    "@nuxtjs/fontaine",
    "@nuxtjs/seo"
  ],
  googleFonts: {
    preload: true,
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    },
  },
  vuetify: {
    moduleOptions: {
      importComposables: true,
      prefixComposables: false,
    },
    vuetifyOptions: "./vuetify/vuetify.config.ts"
  },
  site: {
    url: "https://arb.is/",
    name: "Árbær",
    description: "Árbær viðhaldsþjónusta",
    defaultLocale: "is-IS",
  },
  ogImage: {
    enabled: false
  },
})