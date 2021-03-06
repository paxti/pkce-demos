const path = require('path');
const webpack = require('webpack');

const config = {

  context: __dirname,

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './CordovaApp/www'),
    filename: 'index.js'
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: true,
    }),
    new webpack.ProgressPlugin((prog) => {
        if(prog === 0) console.log("[webpack]: Bundle is now invalid.");
        if(prog === 1) console.log("[webpack]: Bundle is now valid.");
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'electron': 'commonjs electron'
  }
}
module.exports = config;