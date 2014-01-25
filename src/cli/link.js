var CORE_BASE = "./../core/";

var fs = require("fs");
var path = require("path");

var paths = require(CORE_BASE + "paths");
var fsu = require(CORE_BASE + "fsUtil");

function Linker(packageName) {
	this.__packageName = packageName;
}

var $ = Linker.prototype;

$.run = function run() {
	var packageName = this.__packageName; 
	var linkPath = paths.linkedModules + packageName;
	var exists = false;

	try {
		var stat = fs.statSync(linkPath);
		exists = stat.isDirectory() || stat.isFile();
	} catch (ex) {
		if (ex.code !== "ENOENT") {
			throw ex;
		}
	}

	if (!exists) {
		console.log("No package with the given name could be found");
		return;
	}

	var modulesPath = path.join(process.cwd(), "ts_modules");
	fsu.mkpath(modulesPath);
	
	var targetPath = path.join(process.cwd(), "ts_modules", packageName);
	fs.symlinkSync(linkPath, targetPath);
}

module.exports = function(args) {
	return new Linker(args[0]);
}; 
