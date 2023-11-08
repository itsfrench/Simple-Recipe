const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'dist'),
      
    },
    proxy: {
      '/assets': 'http://localhost:3000/',
      secure: false
    }
  },
  module: {
    rules: [
      { 
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader:'babel-loader', 
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }, 
      {
        test: /\.s?css/,
        exclude: '/node_modules/',
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        // use: ['url-loader'],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({title: 'Development', template: './index.html'})],
};