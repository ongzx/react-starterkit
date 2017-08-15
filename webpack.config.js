var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpackPlugin({
    template: './src/client/index.html',
    filename: 'index.html',
    inject: 'body'
})
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loaders: ['react-hot-loader','babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: { 
                                modules: true, 
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader',
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: APP_DIR,
        hot: true,
        compress: true,
        port: 8082,
        watchContentBase: true
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    plugins: [ 
        new ExtractTextPlugin( '[name].bundle.css'),
        HtmlWebpackConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};

module.exports = config;