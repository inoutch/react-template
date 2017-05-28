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
    output: {
        path: buildPath,
        filename: 'app.js',
    },
    plugins: [
        new TransferWebpackPlugin([
            {from: srcContentPath},
        ], __dirname),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
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