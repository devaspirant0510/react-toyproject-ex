const path = require("path");
const reactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    name: "rspGame",
    devtool: "eval",
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./src/App','./src/client' ]
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties"
                ]
            }
        },{
            test: /\.(jpg|png)$/,
            use: {
                loader: 'url-loader',
            },
        },]
    },
    plugins:[
        new reactRefreshPlugin(),
    ],
    output: {
        publicPath: path.join(__dirname, "dist"),
        filename: "app.js"
    },
    devServer:{
        devMiddleware:{
            publicPath: "/dist"
        },
        static:{
            directory:path.resolve(__dirname)
        },
        proxy:{
            "/":"http://127.0.0.1:8000"
        },
        hot:true

    }
}