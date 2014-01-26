module.exports = function(args) {
	if (args.length === 0) {
		return registerLinkedModule();
	} else {
		return importLinkedModule(args);
	}
}

function importLinkedModule(args) {
	var importer = require("./../core/importLinkedModule");
	var moduleName = args[0];

	return {
		exec: function() {
			importer(moduleName);
		}
	}
}

function registerLinkedModule() {
	var register = require("./../core/registerLinkedModule");

	return {
		exec: function() {
			register("");
		}
	}
}
