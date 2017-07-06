const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dest')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'dest'),
        port: 9000
    },

    plugins: [
        new HtmlPlugin({
            title: 'redux tutorial',
            template: 'index.html'
        })
    ]
}