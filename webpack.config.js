const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  module: {
    loaders: [
      {
        test: /\.js?/,
        excludes: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true
      }
    })
  ]
};
