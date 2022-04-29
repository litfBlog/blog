/**
 * @Author: litfa
 * @Date: 2022-03-07 09:54:16
 * @LastEditTime: 2022-04-29 16:03:33
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /blog/vue.config.js
 * @
 */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/'
      },
      'static': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/style/colors.less')
      ]
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Litf Blog'
        return args
      })
  }
}
