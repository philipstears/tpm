var CORE_BASE = "./../core/";
var UTIL_BASE = "./../utils/";

var fs = require("fs");
var path = require("path");

var paths = require(CORE_BASE + "paths");
var findPackage = require(CORE_BASE + "findPackage");
var Package = require(CORE_BASE + "package");
var fsu = require(UTIL_BASE + "fsUtil");

function LinkMaker() {
}

var $ = LinkMaker.prototype;

$.run = function run() {
	var packageDescriptionPath = findPackage("");

	if (packageDescriptionPath===null) {
		console.log("Couldn't locate a tspackage.json file");
		return;
	}

	var packageDirectory = path.dirname(packageDescriptionPath);
	var package = new Package(packageDescriptionPath);
	var packageLinkDir = paths.linkedModules;
	var packageLinkPath = packageLinkDir + package.getName(); 

	fsu.mkpath(packageLinkDir);

	fs.symlinkSync(packageDirectory, packageLinkPath);
};

module.exports = LinkMaker;
