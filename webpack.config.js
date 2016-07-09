var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
// 	devtool: 'inline-source-map', //setting up webpack  - gives us line numbers for debugging'
// 	entry: [
// 		'webpack-dev-server/client?http://127.0.0.1:8000/',
// 		'webpack/hot/only-dev-server',
// 		'./src'
// 		//entry file - defines where webpack is going to look for files, src is the folder, index.js is the default
// 	],
// 	output: {
// 		path: path.join(__dirname, 'public'),
// 		filename: 'bundle.js'
// 		//where webpack is going to output - to an object in public directory, bundle.js
// 	},
// 	resolve: {
// 		modulesDirectories: ['node-modules', 'src'],
// 		extensions: ['', '.js']
// 		//where webpack is going to look for the files to bundle together
// 	},
// 	module: {
// 		loaders: [
// 		{
// 			test:/\.jsx?$/,
// 			exclude: /node-modules/,
// 			loaders: ['react-hot', 'babel?presets[]-react,presets[=es2015']
// 		}]
// 		//loaders - modules used to help load the app
// 	},
// 	plugins: [
// 		new webpack.HotModuleReplacementPlugin(),
// 		new webpack.NoErrorsPlugin()
// 		//allows hot replacement of library and noErrors plug in stops loading if any errors
// 	]
// };