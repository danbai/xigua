const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        port: 8000
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            components: path.join(__dirname, 'src/components'),
            pages: path.join(__dirname, 'src/pages'),
            reducers: path.join(__dirname, 'src/reducers'),
            data: path.join(__dirname, 'src/data'),
            images: path.join(__dirname, 'src/images'),
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
};