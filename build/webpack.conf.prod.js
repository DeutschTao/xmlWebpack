const merge = require('webpack-merge');
const base = require('./webpack.conf.base');
const entry = base.entry;
// const path = require('path')
//
// const entry = Object.keys(base.entry).reduce((res, key) => {
//     res[key] = [
//         path.resolve(__dirname, '../src/dev/bridge.js'),
//         base.entry[key],
//     ];
//     return res;
// }, {});

module.exports = merge(base, {
    entry,
    mode: 'production',
});
