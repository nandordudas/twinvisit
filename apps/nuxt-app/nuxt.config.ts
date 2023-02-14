import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
  ],
  ssr: false,
  nitro: {
    preset: 'vercel',
  },
  unocss: {
    icons: {
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1.2,
      warn: true,
    },
    preflight: true,
    components: false,
    transformers: [
      transformerVariantGroup(),
    ],
    webFonts: {
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    },
  },
})
