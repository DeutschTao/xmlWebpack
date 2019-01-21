const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const apiMocker = require("webpack-api-mocker");
const base = require('./webpack.conf.base');
const entry = base.entry;
module.exports = merge(base, {
    entry, 
    mode: 'development',
    devServer: {
         contentBase: path.resolve(__dirname, "../src/template/test"),
         port: 8083,
         hot: true
    }
})


// const entry = Object.keys(base.entry).reduce((res, key) => {
//     res[key] = [
//         path.resolve(__dirname, '../src/dev/bridge.js'),
//         base.entry[key],
//     ];
//     return res;
// }, {});

// const proxy = {
//     "/clue/*": {
//         // target: "http://10.110.236.16:9220",
//         target: "http://127.0.0.1:1929",
//         changeOrigin: true,
//         secure: false,
//     }
// };

// const before = (app) => {
//     apiMocker(app, path.resolve(__dirname, './mock/api.js'));
// };

// module.exports = merge(base, {
//     entry,
//     mode: 'development',
//     devtool: 'inline-source-map',
//     devServer: {
//         proxy,
//         // before,
//     }
// });
