const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const xmlPath = path.resolve(__dirname, '../src/template/*/index.xml');
// const htmlPath = path.resolve(__dirname, '../src/template/*/index.html');

const pathsToObject = (paths = []) => paths.reduce((res, path) => {
    // you can define entry names mapped to [name] here
    res[path.split('/').slice(-2)[0]] = path;
    return res;
}, {});

const entry = pathsToObject(glob.sync(xmlPath));

// const htmlTemplates = pathsToObject(glob.sync(htmlPath));

module.exports = {
    entry,
    output:{    //输出
        path:path.resolve(__dirname,'dist'),    //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径
        filename:'[name].bundle.xml'    //输出的文件名
    },
    // resolve: {
    //     extensions: ['.tsx', '.ts', '.jsx', '.js']
    // },
    // optimization: {
    //     // minimize: true,
    //     minimizer: [
    //         new OptimizeCssAssetsPlugin({}),
    //         new TerserPlugin({
    //             terserOptions: {
    //                 output: {
    //                     comments: false
    //                 }
    //             }
    //         }),
    //     ],
    // },
    // plugins: [
    //     ...Object.keys(htmlTemplates).map(name => {
    //         return new HtmlWebpackPlugin({
    //             inlineSource: '.(js|css)$', // embed all javascript and css inline
    //             filename: name + '.html',
    //             inject: true,
    //             chunks: [name],
    //             template: htmlTemplates[name],
    //         })
    //     }),
    //     // new webpack.ProvidePlugin({
    //     //     Promise: 'es6-promise-promise', // works as expected
    //     // }),
    //     new MiniCssExtractPlugin({
    //         // Options similar to the same options in webpackOptions.output
    //         // both options are optional
    //         filename: "[name].css"
    //     }),
    //     new OptimizeCssAssetsPlugin({
    //         assetNameRegExp: /\.style\.css$/g,
    //         cssProcessor: require('cssnano'),
    //         cssProcessorOptions: { discardComments: { removeAll: true } },
    //         canPrint: true
    //     }),
    //     new HtmlWebpackInlineSourcePlugin()
    // ],
    module: {
        rules: [
            { test: /\.xml$/, loader: 'xml-loader' }
        ]
    }
};
