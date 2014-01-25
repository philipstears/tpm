var options = require("./options");

if (!options.exec) {
	return 1;
}

return options.exec();
