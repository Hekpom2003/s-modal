const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app'
    })
  ]

};