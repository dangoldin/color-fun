const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/app',

  entry: './js/app.jsx',

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'react-hot-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new ExtractTextPlugin('styles.css'),
  ],
};
