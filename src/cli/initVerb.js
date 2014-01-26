var path = require("path");
var fs = require("fs");
var readline = require("readline");

module.exports = function(args) {
	return {
		exec: function exec() {
			var rl = readline.createInterface({
				input: process.stdin,
				output: process.stdout
			});

			var baseDescription = {
				name: path.basename(process.cwd())
			};

			rl.question("name (" + baseDescription.name + "): ", function(answer) {
				if (answer !== '') {
					baseDescription.name = answer;
				}

				rl.close();
			});
		}
	}
};
