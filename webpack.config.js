//require('babel-polyfill');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   entry: './src/js/index.js',
   output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'js/bundle.js'
   },
   devServer: {
     contentBase: path.join(__dirname, 'dist')
   },

   plugins: [
     new HtmlWebpackPlugin({
       filename: 'index.html',
       template: './src/index.html' 
     })
   ],
   module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
              loader: 'babel-loader'
           }
         }
       ]
  }
}