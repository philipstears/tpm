var CORE_BASE = "./../core/";

var fs = require("fs");

var paths = require(CORE_BASE + "paths");
var findPackage = require(CORE_BASE + "findPackage");
var Package = require(CORE_BASE + "package");
var fsu = require(CORE_BASE + "fsUtil");

function LinkMaker() {
}

var $ = LinkMaker.prototype;

$.run = function run() {
	var packagePath = findPackage("");

	if (packagePath===null) {
		console.log("Couldn't locate a tspackage.json file");
		return;
	}

	var package = new Package(packagePath);
	var packageLinkDir = paths.linkedModules;
	var packageLinkPath = packageLinkDir + package.getName(); 

	fsu.mkpath(packageLinkDir);

	fs.symlinkSync(packagePath, packageLinkPath);
};

module.exports = LinkMaker;
