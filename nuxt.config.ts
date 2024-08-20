// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
  app: {
    head: {
      title: '.Store',
      meta: [
        { name: 'description', content: 'store commerce' },
        { name: 'keywords', content: 'commerce' }
      ],
      link: [{ rel: 'icon', href: 'favicon.ico' }]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt', 'nuxt-swiper'],
  css: ['~/assets/styles/common.css', 'swiper/css', 'swiper/css/navigation', 'swiper/css/pagination'],
  icon: {
    serverBundle: {
      collections: ['ri']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  swiper: {
    modules: ['navigation', 'pagination', 'effect-creative']
  }
});
