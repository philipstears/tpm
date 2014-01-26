var path = require("path");
var fs = require("fs");
var readline = require("readline");
var util = require("util");

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

			var questions = [
				["name (%s)", "name"],
			];

			var previousQuestion = -1;

			function nextQuestion() {
				if (previousQuestion === questions.length - 1) {
					done();
				} else {
					var currentQuestion = ++previousQuestion;
					askQuestion(questions[currentQuestion]);
				}
			}

			function done() {
				console.log("tspackage.json file:\n");
				console.log(JSON.stringify(baseDescription, "\t"));
				rl.close();
			}

			function askQuestion(question) {
				var prompt = question[0] + ": ";
				var field = question[1];
				var fieldValue = baseDescription[field];

				prompt = util.format(prompt, fieldValue);

				rl.question(prompt, function(answer) {
					if (answer !== '') {
						baseDescription[field] = answer;
					}

					nextQuestion();
				});
			}

			nextQuestion();
		}
	}
};
