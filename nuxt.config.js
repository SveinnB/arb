export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'is'
    },
    title: 'Árbær',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Árbær ehf' },
      { hid: 'keywords', name: 'keywords', content: 'Einingarhús, smiður, smiðir, verktakar, byggingaverktakar, viðhald, smíði, árbær, hús í hús, hús, blokk, húsfélag' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/arbLogo.png' },
    ]
  },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/global.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#3ab54a',
        }
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://arb.is',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/einingarhus',
      '/limtre',
      '/yleiningar',
      '/hafa-samband',
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString()
    }))
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {},
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  },
}
