const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'source-map' : 'eval-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_moduels/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
