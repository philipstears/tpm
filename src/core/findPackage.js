var fs = require("fs");
var path = require("path");

var MODULE_FILE_NAME = "tspackage.json";

module.exports = function findPackage(directory) {

	directory = fs.realpathSync(directory);

	var currentPath = path.join(directory, MODULE_FILE_NAME);

	for (;;) {
		var stats;
		
		try {
			stats = fs.statSync(currentPath);
		} catch (err) {
		}

		if (!!stats && stats.isFile()) {
			return currentPath;
		}

		var newPath = path.dirname(directory);

		if (newPath === directory) {
			return null;
		}

		directory = newPath;
	}
};
