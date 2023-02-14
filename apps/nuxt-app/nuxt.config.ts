import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light' },
      ],
      htmlAttrs: {
        lang: 'en-US',
      },
    },
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
  ],
  ssr: false,
  unocss: {
    icons: true,
    preflight: true,
    components: false,
    transformers: [
      transformerVariantGroup(),
    ],
  },
})
