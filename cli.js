// See the readme for todos
const chalk = require("chalk");

const helpinfo = `
	
${chalk.underline.bold('Options:')}

	-c, --color	color of digits displayed
			(this color should be supported by chalk)
			https://npmjs.com/package/chalk

  	-f, --font	font to be used by the digits diaplayed 
			(this font should be used by figlet)
			https://npmjs.com/package/figlet

	-m, --minutes	timer to be displayed in 00:00 format

${chalk.underline.bold("Examples:")}
	check the readme
`

module.exports = args => {
	// Using an objects because we will need to return an object in future additions
	const parsed = {};
	parsed.seconds = Number(args[0]);
	args.forEach((el, i) => {
		switch (el) {
			case "-h":
			case "--help":
				console.log(helpinfo);
				process.exit();
				break;

			case "-f":
			case "--font":
				if (args.length > i + 1) {
					parsed.font = args[i + 1];
				} else {
					console.log(chalk.red("font not specified"));
					process.exit();
				}
				break;
				
			case "-c":
			case "--color":
				if (args.length > i + 1) {
					parsed.color = args[i + 1];
				} else {
					console.log(chalk.red("color not specified"));
					process.exit();
				}
				if (!chalk[parsed.color]) {
					console.log(chalk.red("this color can't be used"));
					process.exit();
				}
				break;

			case "-m":
			case "--minutes":
				parsed.showMinutes = true;
				break;

			default:
				if(Number(el) === NaN){
					console.log(chalk.red("invalid flag used"));
					process.exit();
				}
				break;
		}
	});
	return parsed;
};
