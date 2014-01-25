var os = require("os");
var paths;

switch (os.type()) {
	case "Linux":
		paths = {
			temp: os.tmpdir(),
			global: '/usr/',
			globalModules: '/usr/lib/ts_modules/'
		};
	break;
	
	default:
		throw new Error("Unknown platform '" + os.type() + "'");
};

module.exports = paths;
