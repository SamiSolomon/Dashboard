// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@morev/vue-transitions/nuxt'
  ],

tailwindcss: { exposeConfig: true },
headlessui: { prefix: "H" },
app: {
  head: {
    title: "Analytics",
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.svg" },

      // Inter font
      { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
      { rel: "preconnect", href: "https://rsms.me/" },
    ],
  },
},
typescript: {
  shim: false // Set to false if you're using strict TypeScript support
},

})
