const webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const HtmlwebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  devtool: (process.env.NODE_ENV === 'production') ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index')
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: (process.env.NODE_ENV === 'production') ? [] : ['eslint'],
        include: path.resolve(ROOT_PATH, './app/src')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.module\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'resolve-url',
        'sass'
      ]
    },
    {
      test: /\.scss$/,
      exclude: /\.module\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file?name=[path][name].[hash].[ext]'
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "url-loader?mimetype=application/font-woff"
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: "file-loader?name=[name].[ext]"
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      appRoot: path.resolve(ROOT_PATH, 'app/src')
    },
  },
  output: {
    path: (process.env.NODE_ENV === 'production') ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    host: process.env.IP_BIND || '0.0.0.0',
    port: process.env.PORT || 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new HtmlwebpackPlugin({
      title: 'React+Redux Starter',
      template: 'app/public/index.html'
    })
  ]
};
