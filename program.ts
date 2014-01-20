import spawn = module("child_process");
import process = module("process");

var args = process.argv.slice(2);

console.log(args[0]);
