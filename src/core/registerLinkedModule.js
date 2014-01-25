var UTIL_BASE = "./../utils/";
var fsu = require(UTIL_BASE + "fsUtil");

var fs = require("fs");
var path = require("path");

var paths = require("./paths");
var findPackage = require("./findPackage");

var Package = require("./package");

function registerLinkedModule(directory) {
	var packageDescriptionPath = findPackage(directory);

	if (packageDescriptionPath===null) {
		throw new Error("Couldn't locate a tspackage.json file");
		return;
	}

	var packageDirectory = path.dirname(packageDescriptionPath);
	var package = new Package(packageDescriptionPath);
	var packageLinkDir = paths.linkedModules;
	var packageLinkPath = packageLinkDir + package.getName(); 

	fsu.mkpath(packageLinkDir);

	fs.symlinkSync(packageDirectory, packageLinkPath);
}

module.exports = registerLinkedModule;
