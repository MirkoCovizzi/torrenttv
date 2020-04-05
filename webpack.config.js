"use strict";

const path = require("path");

module.exports = {
    mode: "production",
    // Set debugging source maps to be "inline" for
    // simplicity and ease of use
    devtool: "inline-source-map",

    // The application entry point
    entry: "./web/index.tsx",

    // Where to compile the bundle
    // By default the output directory is `dist`
    output: {
        path: path.resolve(__dirname, "static"),
        filename: "index.bundle.js"
    },

    // Supported file loaders
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },

    // File extensions to support resolving
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
};