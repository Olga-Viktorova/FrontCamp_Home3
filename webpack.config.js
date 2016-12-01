'use strict'
const ENV = process.env.ENV || 'development';
const webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: "./src/js/home",
	output: {
    	path: __dirname + "/dist",
    	publicPath: '/',
        filename: "build.js",
        library: "home"
    },

  // watch: ENV == 'development',  

    //watchOptions: {
    //	aggregateTimeout: 300
	//},	

	devtool: ENV == 'development' ? "source-map" : null, 

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(ENV)

		})
	],

	module: {
		loaders: [
    {
			test: /\.js$/,
			loader: 'babel-loader?presets[]=es2015',
		},
    { 
      test: /\.css$/, 
      loader: "style-loader!css-loader"
    }, 
    { 
      test: /\.less$/, 
      loader: "style-loader!css-loader!less-loader" 
    },
    { 
     	test: /\.(png|jpg)$/, 
      loader: "url-loader?name=[path][name].[ext]&limit=500" 
    },                 	
    ]	
	},

devServer: {
    host: 'localhost',
    port: 9080,
    contentBase:__dirname + "/dist"
     }
     
};