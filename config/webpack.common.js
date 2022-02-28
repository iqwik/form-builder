const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { cacheLoader, cssProcessing, bundleFolder } = require('./utils')

module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, `../${bundleFolder}`),
        globalObject: 'self',
        filename: 'assets/js/[name].js',
        chunkFilename: 'assets/js/[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendors',
                    enforce: true
                },
            }
        }
    },
    stats: {
        children: false
    },
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, '../src/assets'),
            "@components": path.resolve(__dirname, '../src/components/'),
            "@styles": path.resolve(__dirname, '../src/styles'),
        },
        extensions: ['.wasm', '.mjs', '.jsx', '.js', '.tsx', '.ts', '.d.ts', '.json', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    { ...cacheLoader() },
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            cssProcessing({ withModules: false }),
            cssProcessing({ withModules: true }),
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/img'
                        }
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'assets/fonts'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
    ],
    target: 'web',
}
