const config: NuxtConfiguration = {
  // ...(省略)

  build: {
    publicPath: '/static/',
    extend(config, ctx) {
    },
  },

  router: {
    base: '/pwa-base-app/'
  },
}
