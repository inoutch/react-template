'use strict';

const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const srcContentPath = 'src/main/resources/static';
const buildPath = path.resolve(__dirname, 'build/main/resources/static');
const appPath = path.join(__dirname, '/src/main/javascript/app.jsx');

const config = {
    entry: {
        app: appPath,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        contentBase: buildPath,
        hot: true,
        inline: true,
        port: 3000,
        host: 'localhost',
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'js/app.js',
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: srcContentPath},
        ], __dirname),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css",
            },
            {
                test: /\.jsx$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: [nodeModulesPath],
            },
        ],
    },
};

module.exports = config;