'use strict';

// TODO: when webpack is fixed, switch to babel
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
        loader: 'babel-loader'
      }
    ]
  }
};
