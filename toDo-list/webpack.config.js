const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'ToDo List',
        }),
    ],    
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};