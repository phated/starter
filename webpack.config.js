'use strict';

var path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader'
      }
    ]
  }
};
