const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ]

        },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new ModuleFederationPlugin({
    //   name: 'app2',
    //   remotes: {
    //     app1: 'app1@http://localhost:3001/remoteEntry.js', // 📥 load from app1
    //   },
    //   shared: ['react', 'react-dom'],
    // })
  ],
  
  resolve: {
    extensions: ['.js', '.jsx']
  }
};