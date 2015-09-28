var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    entry: [
      './src/js/index'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
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
