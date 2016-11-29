'use strict'
const ENV = process.env.ENV || 'development';
const webpack = require('webpack');

module.exports = {
	entry: "./srс/home",
	output: {
    	path: __dirname + "/dist",
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
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader?presets[]=es2015',
			//exclude: /node_modules/ 
			// query: {
			//presets:["es2015"], 
			//	optional:["runtime"]
			//}
			},
			{ 
			test: /\.css$/,
			loader: 'style!css',
			},
			]
	},
};