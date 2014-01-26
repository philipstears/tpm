var args = process.argv;

// The first two arguments are the node executable, and the script name
var ourArgs = args.slice(2);

if (ourArgs.length < 1) {
	usage(); 
	return;
}

function usage() {
	console.log("TypeScript Package Manager 0.1");
	console.log("Copyright (c) 2014, Philip Stears");
	console.log("");
	console.log("Available verbs:");
	console.log("\tlink");
	console.log("\tlink [packageName]");
}

var verb = ourArgs[0];
var verbArguments = ourArgs.slice(1);
var verbProcessor = require("./" + verb + "Options")(verbArguments);
verbProcessor.exec();
