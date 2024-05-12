const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: 'dist',
  publicPath: './',
  transpileDependencies: true
})

module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('purgecss')
        .use(require('@fullhuman/postcss-purgecss'), [{
          content: [
            './public/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
          ],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }]);
    }
  }
}