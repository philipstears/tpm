var fs = require("fs");

function Package(packagePath) {
	this.load(packagePath);
}

var $ = Package.prototype;

$.load = function load(packagePath) {
	this.__data = require(fs.realpathSync(packagePath));
};

module.exports = Package;
