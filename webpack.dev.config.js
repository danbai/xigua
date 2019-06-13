const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true
    },
    resolve: {
        alias: {
            components: path.join(__dirname, 'src/components'),
            pages: path.join(__dirname, 'src/pages'),
            reducers: path.join(__dirname, 'src/reducers'),
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    }
};