module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/../back/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            "@babel/preset-react",
            "@babel/env"
          ]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // npm install url-loader --save-dev
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 8192,
            // },
          },
        ],
      },
    ]
  },
  devtool: 'source-map'
}
