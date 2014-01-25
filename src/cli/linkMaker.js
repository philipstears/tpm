var CORE_BASE = "./../core/";
var registerLinkedModule = require(CORE_BASE + "registerLinkedModule");

function LinkMaker() {
}

var $ = LinkMaker.prototype;

$.run = function run() {
	registerLinkedModule("");
}

module.exports = LinkMaker;
