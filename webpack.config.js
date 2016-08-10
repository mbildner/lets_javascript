module.exports = {
  output: {
    filename: 'index.js',
    library: ['PublishedApplication']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
