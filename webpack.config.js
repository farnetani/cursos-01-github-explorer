const path = require('path') // como roda dentro do nodejs e o node conhece o require, usamos ele

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // linux: 'src/index.jsx', windows: `src\\index.jsx`
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // expressão regular que verifica se o arquivo é terminado .jsx
        exclude: /node_modules/, // excluo todos os arquivos que estao na pasta node_modules
        use: 'babel-loader' // faz a integração entre o Babel e o Webpack
      }
    ]
  }
}
