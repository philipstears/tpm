var fs = require("fs");
var path = require("path");
var importLinkedModule = require("./../core/importLinkedModule");

function Linker(packageName) {
	this.__packageName = packageName;
}

var $ = Linker.prototype;

$.run = function run() {
	var packageName = this.__packageName; 
	importLinkedModule(packageName);
}

module.exports = function(args) {
	return new Linker(args[0]);
}; 
