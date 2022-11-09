const { defineConfig } = require('@vue/cli-service')

const isDevMode = process.env.NODE_ENV === 'development'
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    popup: {
      entry: 'src/entry/popup.ts',
      template: 'public/index.html',
      filename: 'popup.html'
    },
    content: {
      entry: 'src/entry/content.ts',
    },
    background: {
      entry: 'src/entry/background.ts',
    }
  },
  filenameHashing: false,
  configureWebpack: {
    output: { // 配置以直接输出在dist目录，而不是dist/js/
      filename: `[name].js`,
      chunkFilename: `[name].js`
    },
    devtool: isDevMode ? 'inline-source-map' : false
  },
  chainWebpack: config => {
    config.plugins.delete('html-content')
    config.plugins.delete('preload-content')
    config.plugins.delete('prefetch-content')
    config.plugins.delete('html-background')
    config.plugins.delete('preload-background')
    config.plugins.delete('prefetch-background')
  }
})
