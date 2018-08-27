const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  resolve: {
    symlinks: false,
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './src/js'),
      'node_modules'
    ],
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: ['.web.js', '.web.jsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
