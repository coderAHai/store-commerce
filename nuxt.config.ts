// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: './src',
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
