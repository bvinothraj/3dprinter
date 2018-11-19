var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: path.join(SRC_DIR + "/app/index.js"),
	output: {
		path: path.join(DIST_DIR + "/app"),
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader"
			}
		]
	}
};

module.exports = config; 