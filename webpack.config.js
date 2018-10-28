const path = require('path');


module.exports = {
    entry: './public/src/app.js',
    output: {
        path: path.join(path.join(__dirname, 'public'), 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool:"cheap-module-eval-source-map"


}

