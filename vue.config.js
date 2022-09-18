const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    allowedHosts: "all",
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      }
    }
  }
}