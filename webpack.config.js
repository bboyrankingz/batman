var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
    entry: DEV + "/index.jsx", 
    output: {
        path: OUTPUT,
        filename: "batman.js"
    },
    module: {
        rules: [{
            include: DEV,
            loader: "babel-loader",
            query: {
                presets: ['@babel/react', '@babel/es2015']
              }
        }]
    }
};

module.exports = config;