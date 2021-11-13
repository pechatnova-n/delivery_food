const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        menu: './src/menuPart.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval-source-map'
}