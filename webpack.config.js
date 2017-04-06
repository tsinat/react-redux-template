
import webpack from 'webpack';

export default {
    entry: "./app.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules,
                loader: 'babel-loader'
            }
        ]
    }
}
