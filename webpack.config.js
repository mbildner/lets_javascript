module.exports = {
  output: {
    filename: 'index.js',
    library: ['DopeApp']
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
