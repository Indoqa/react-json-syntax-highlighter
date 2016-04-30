const DEV_PORT = 3000
const HOT_RELOAD_PORT = 3001

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devPort: DEV_PORT,
  hotPort: HOT_RELOAD_PORT,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${HOT_RELOAD_PORT}/__webpack_hmr`,
    path.join(__dirname, './index.js')
  ],
  output: {
    path: path.join(__dirname, 'target'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        excludes: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      }
    ]
  }
}
