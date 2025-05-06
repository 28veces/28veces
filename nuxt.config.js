export default defineNuxtConfig({
  compatibilityDate: '2025-05-05',
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
