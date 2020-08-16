const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { url: false }
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  devServer: {
    contentBase: './',
    inline: true,
    hot: true,
    port: 3000,
    host:"0.0.0.0"
  }
}
