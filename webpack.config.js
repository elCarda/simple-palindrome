
module.exports = {
    entry: "./src/main.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|css|html)$/, loader: "file-loader?name=[path][name].[ext]" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};