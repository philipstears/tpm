var args = process.argv;
var ourArgs = args.slice(2);

if (args.length < 1) {
	usage(); 
	return;
}

function usage() {
	console.log("TypeScript Package Manager 0.1");
	console.log("Copyright (c) 2014, Philip Stears");
	console.log("");
	console.log("Available verbs:");
	console.log("\tlink");
	console.log("\tinstall [packageName]");
}

var verb = args[2];
var verbProcessor = require("./" + verb + "Options");

module.exports = verbProcessor();
