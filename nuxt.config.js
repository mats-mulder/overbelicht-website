export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/favicon.png' },
    ],
    script:[
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.5/lottie_svg.min.js'
      },
      {
        src: '/js/lottie.js'
      },
      {
        src: '/js/gsap.js'
      },
      {
        src: '/js/main.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyB6Uo-GrRRp-p8oq9GnxTvNiJXmcROXzIg",
          authDomain: "overbelicht-4120f.firebaseapp.com",
          projectId: "overbelicht-4120f",
          storageBucket: "overbelicht-4120f.appspot.com",
          messagingSenderId: "154950537918",
          appId: "1:154950537918:web:b6d0468cbaa1bb0ffbc4ef",
          measurementId: "G-MN3LZ6C22K"
        },
        services: {
          analytics: {
            collectionEnabled: true // default
          }
        }
      }
    ]
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

}
