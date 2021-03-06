const HtmlWebpackPlugin = require('html-webpack-plugin')
// const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
// const webpack = require('webpack')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const cssnano = require('cssnano')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    postcssPresetEnv(),
                    postcssNormalize(),
                    cssnano(),
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    postcssPresetEnv(),
                    postcssNormalize(),
                    cssnano(),
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // url-loader (transforming ressources into base64 URI)
      // can be used instead of file-loader (get ressources' URL)
      // {
      //   test: /\.(png|jpe?g|gif|ico)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // produce one script chunk and / or inline script in index.html
    // new webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 1
    // }), // then manually remove /dist/*.js
    // new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/\.js$/]),
  ],
}
