module.exports = {
    entry: "./src/index.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};
// const webpack = require('webpack');
// const merge = require('webpack-merge');
// const webpackBaseConfig = require('./webpack.base.config');
// const config = require('./config');

// module.exports = merge(webpackBaseConfig, {
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /node_modules/,
//         use: 'awesome-typescript-loader',
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader', options: config.cssOptions },
//           { loader: 'postcss-loader' },
//           { loader: 'sass-loader', options: config.sassOptions },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
// });