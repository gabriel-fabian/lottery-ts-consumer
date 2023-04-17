const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3001,
    static: {
      directory: './public'
    },
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(
        'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados'
      )
    }),
    new HtmlWebpackPlugin({
      template: './public/template.dev.html',
      favicon: './public/favicon.ico'
    })
  ]
})
