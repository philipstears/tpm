module.exports = function(args) {
	if (args.length === 0) {
		return linkLocalOptions();
	} else {
		return linkPackageOptions(args);
	}
}

function linkLocalOptions() {
	var LinkMaker = require("./linkMaker");
	var runner = new LinkMaker();

	return {
		exec: function() {
			return runner.run();
		}
	}
}

function linkPackageOptions(args) {
	var Linker = require("./link");
	var runner = new Linker(args);

	return {
		exec: function() {
			return runner.run();
		}
	}
}
