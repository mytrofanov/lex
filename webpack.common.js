let path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,                
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader',
            },
        ],
    },
};
