var spawn = require("child_process").spawn;

desc("Builds tpm")
task("build", function() {
	var cmd = spawn("node", ["./node_modules/typescript/built/local/tsc.js", "program.ts", "-m", "commonjs", "--outDir", "built"], {stdio: "inherit"});

	cmd.on("exit", function() {
		complete();
	});
}, { async: true } );

task("default", ["build"]);
