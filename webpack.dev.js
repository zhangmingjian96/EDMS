const path = require('path')
// 静态资源打包
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        index: './src/javascripts/index',
        vendor: './src/javascripts/vendor',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dev')
    },
    devServer: {
        port: 9000,
        // host: '',
        proxy: {
            // '/lagou': {
            //     target: ''
            // }
        }
    },
    plugins: [
        new CopyWebpackPlugin([ // 复制静态资源
            { from: 'static', to: 'static' }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    module: {
        rules: [
            {
              test: /.(jpg|jpeg|png|gif)$/,
              use: [
                  { loader: 'url-loader', options: { limit: 8100 } }
              ]
            }
        ]
    },
    resolve: {
        alias: {
            "@controllers": path.resolve(__dirname, '../src/javascripts/controllers'),
            "@modules": path.resolve(__dirname, '../src/javascripts/modules'),
            "@assets": path.resolve(__dirname, '../src/assets'),
        }
    }
}


// 单入口，单出口
// entry: './src/javascripts/index',
// output: {
//     filename: 'index.js',
//     path: path.join(__dirname, '../dev')
// }

// 多入口，单出口
// entry: [
//     './src/javascripts/index',
//     './src/javascripts/vendor',
// ],
// output: {
//     filename: 'index.js',
//     path: path.join(__dirname, '../dev')
// }

// 多入口， 多出口

// entry: {
//     index: './src/javascripts/index',
//     vendor: './src/javascripts/vendor',
// },
// output: {
//     filename: '[name].js',
//     path: path.join(__dirname, '../dev')
// }