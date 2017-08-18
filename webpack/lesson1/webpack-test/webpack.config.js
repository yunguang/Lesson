//1.核心模块（内置模块）
//2.第三方模块（npm）
//3.自定义模块
const path=require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:'./build',
        inline:false
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:[ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};