const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config.ts')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = merge(base, {
  optimization: {
    splitChunks:  {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](vue|vuex|vue-router|apollo-client|vue-meta|vue-i18n|vuex-router-sync|vue-apollo|vue-meta|localforage)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },   
      runtimeChunk: {
      name: "manifest",
    }
  },
  mode: 'development',
  resolve: {
    alias: {
      'create-api': './create-api-client.js'
    }
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin()
  ]
})

module.exports = config;
