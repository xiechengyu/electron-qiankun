const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => ({
    devServer: {
      hot: true,
      port: 8081,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    }
  })
})
