var webpack = require('webpack');

var path = require('path');


module.exports = {  
    devtool: 'inline-source-map',
    mode: "development", // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle-todoapp.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },{
            test: /\.html$/,
            loader: 'raw'
        }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()],
    devServer: {
        hot: true,
        proxy: {
            '*' : 'http://localhost:9900'
        }
    }
}


