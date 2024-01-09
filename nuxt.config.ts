// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content:
            'initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width',
        },
      ],
      noscript: [{ children: 'Javascript is required.' }],
      script: [
        // { src: 'https://telegram.org/js/telegram-web-app.js' },
        { src: '/telegram-web-app.js' }
      ],
      title: '',
    },
    keepalive: true,
  },
  plugins: [
    {
      src: '@/plugins/vconsole.ts',
      ssr: false,
    },
  ],
  css: ['@/styles/scss/index.scss', '@/styles/scss/public/index.scss'],
  devServer: {
    host: process.env.SERVER_HOST,
    port: Number(process.env.SERVER_PORT) || undefined,
  },
  experimental: {
    headNext: true,
    payloadExtraction: false,
  },
  imports: {
    dirs: ['./composables/*', './composables/**/*'],
  },
  modules: ['@vueuse/nuxt', 'nuxt-purgecss', 'nuxt-svgo'],
  nitro: {
    compressPublicAssets: true,
    devProxy: {
      '/api': {
        target: `${process.env.VITE_APP_API_URL}`,
        changeOrigin: true,
        prependPath: true,
      }
    },
  },
  ssr: false,
  typescript: {
    tsConfig: {
      compilerOptions: {
        noImplicitOverride: true,
        noUncheckedIndexedAccess: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
      },
    },
    typeCheck: true,
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1024,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/scss/global-import.scss";',
        },
      },
    },
    server: {
      // hmr: {
      //   clientPort: Number(process.env.HMR_CLIENT_PORT) || undefined,
      //   path: process.env.HMR_PATH,
      //   port: Number(process.env.HMR_PORT) || undefined,
      //   protocol: process.env.HMR_PROTOCOL,
      // },
    },
  },
})
