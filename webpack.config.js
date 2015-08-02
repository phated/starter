'use strict';

var path = require('path');

var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.join(__dirname, './src/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loaders: [
          'react-hot-loader',
          'babel-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true
  }
};
