var fs = require("fs");
var path = require("path");

exports.mkpath = function(dirPath) {
	var toCreate = [dirPath];

	while (toCreate.length > 0) {
		dirPath = toCreate[toCreate.length - 1];

		try {
			fs.mkdirSync(dirPath);
			toCreate.pop();
		} catch (ex) {
			if (ex.code === 'EEXIST') {
				toCreate.pop();
				continue;
			}

			if (ex.code === 'ENOENT' && ex.errno === 34) {
				toCreate.push(path.dirname(dirPath));
				continue;
			}

			throw ex;
		}
	}
}
