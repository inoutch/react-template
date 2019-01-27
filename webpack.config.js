const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const srcDir = "src/main";
const dstDir = "build";

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: {
            "app": path.resolve(srcDir, "typescript", "app.tsx"),
        },
        devtool: isProduction ? false : "source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        module: {
            rules: [{
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            }, {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader"
            }, {
                enforce: "pre",
                test: /\.tsx?$/,
                use: [{
                    loader: 'tslint-loader',
                    options: {
                        typeCheck: true,
                    },
                }],
            }],
        },
        output: {
            path: path.resolve(__dirname, dstDir),
            filename: "js/[name]-[hash].js"
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify(argv.mode),
                },
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.join(__dirname, srcDir, "ejs/index.ejs"),
            }),
            new WebpackBuildNotifierPlugin(),
        ],
        devServer: {
            open: true,
            contentBase: path.join(__dirname, dstDir),
            watchContentBase: true,
            port: 3000,
        },
    };
};
