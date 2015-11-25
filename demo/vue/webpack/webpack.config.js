module.exports = {
	entry: './src/main.js',
	output: {
		path: "./build",
		publicPath: "/build/",
		filename: "build.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css"},
			{ test: /\.html$/, loader: "html"}
		]
	}
}