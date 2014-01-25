var fs = require("fs");

function Package(packagePath) {
	this.load(packagePath);
}

var $ = Package.prototype;

$.getName = function getName() {
	return this.__data.name;
};

$.load = function load(packagePath) {
	this.__data = require(fs.realpathSync(packagePath));
};

module.exports = Package;
