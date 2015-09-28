var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  entry: {
    entry: [
      'webpack-hot-middleware/client',
      './src/js/index'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ],
  resolve: {
    modulesDirectories: ['./src/js', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src', 'js')
      }
    ]
  }
};
