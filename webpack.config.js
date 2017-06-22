const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: path.join(__dirname, '/build/js/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: /app/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['transform-replace-object-assign', 'lodash.assign'],
            'transform-object-rest-spread',
            'transform-class-properties',
          ],
        },
      },
    ],
  },
  plugins: [],
};
