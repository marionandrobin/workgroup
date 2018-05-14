// const path = require('path');
//   const HtmlWebpackPlugin = require('html-webpack-plugin');
//   const CleanWebpackPlugin = require('clean-webpack-plugin');

//   module.exports = {
//     entry: {
//       app: './src/index.js',
//     },
//     devtool: 'inline-source-map',
//    devServer: {
//      contentBase: './dist'
//    },
//     plugins: [
//       new CleanWebpackPlugin(['dist']),
//       new HtmlWebpackPlugin({
//         title: 'Development'
//       })
//     ],
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist')
//     }
//   };

// const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./src/index.html",
//   filename: "./index.html"
// });

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ],
//   },
//   plugins: [htmlPlugin]
// };


const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['react']
            }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
         test:/\.(s*)css$/,
         use:['style-loader','css-loader', 'sass-loader']
      }
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "style-loader" // creates style nodes from JS strings
      //     },
      //     {
      //       loader: "css-loader" // translates CSS into CommonJS
      //     },
      //     {
      //       loader: "sass-loader" // compiles Sass to CSS
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};