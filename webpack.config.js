
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill','./src/index.js'],
        analytics: './src/analytics.js'
    },
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
             '@modules': path.resolve(__dirname, 'src/modules')
        }
    },
    optimization: {
      splitChunks: {
          chunks: 'all'
      }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        preset: [
                            @babel/preset-env
                        ]
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        preset: [
                            @babel/preset-typescript
                        ]
                    }
                }
            }
        ]
    }
}