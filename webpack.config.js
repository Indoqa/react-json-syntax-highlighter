const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index',
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!stylus-loader')
      }
    ]
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  output: {
    filename: 'dist/ReactJsonSyntaxHighlighter.min.js',
    libraryTarget: 'umd',
    library: 'ReactJsonSyntaxHighlighter'
  },
  plugins: [
    new ExtractTextPlugin('dist/ReactJsonSyntaxHighlighter.css', {
      allChunks: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
}
