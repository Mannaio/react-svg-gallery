var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [

    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Reduxstagram',
      template: 'index.html',
      filename: 'index.html' // Load a custom template (ejs by default see the FAQ for details)
    }),
    // new ReactToHtmlPlugin('index.html', 'index.js')
    new ExtractTextPlugin("style.css", {
        allChunks: true
    })
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    {
      test: /\.styl$/,
      include: path.join(__dirname, 'client'),
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
    },
    ]
  },
  stylus: {
    use: [
      poststylus(['autoprefixer'])
    ]
  }
};
