// only build plugin module
require('webpack');
require('weex-loader');
const path = require('path');
module.exports = {
  entry: './web/src/index.js',
  output: {
    path: path.join(__dirname, 'web'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex'
      },
      {
        test: /\.js(\?[^?]+)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      },
      {
        test: /\.vue(\?[^?]+)?$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css(\?[^?]+)?$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
