const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/scss/_variables.scss";
          @import "~@/scss/_mixins.scss";
        `
      }
    }
  },
  devServer: {
    host: 'localhost:8080'
  }
}
