var os = require("os");
var paths;

switch (os.type()) {
	case "Linux":
		paths = {
			temp: os.tmpdir(),
			global: '/usr/',
			globalModules: '/usr/lib/ts_modules/',
			linkedModules: '/usr/lib/ts_modules/links/'
		};
	break;
	
	default:
		throw new Error("Unknown platform '" + os.type() + "'");
};

module.exports = paths;
