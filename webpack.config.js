const path = require('path');
const { readFileSync } = require('fs');

const babelSettings = JSON.parse(readFileSync('.babelrc'));

module.exports = {
  entry: {
    luigiClient: './src/provider-class.js'
  },

  output: {
    filename: 'provider.js',
    libraryExport: 'default',
    library: 'LuigiPluginAuthOauth2',
    libraryTarget: 'umd',
    path: path.join(path.resolve(__dirname), 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelSettings
        }
      }
    ]
  }
};
