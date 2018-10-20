#!/usr/bin/env node
const figlet = require("figlet");
const chalk = require("chalk");
const cliArgsHandler = require("./cli");
const Configstore = require('configstore');
const pkg = require('./package.json');

const conf = new Configstore (
	pkg.name,
	{
		font: {
			name: 'roman',
			horizontalLayout: "full",
			verticalLayout: "fitted"
		}	
	}
);

const parsed =
	process.argv.length > 2
		? cliArgsHandler(Array.prototype.slice.call(process.argv, 2))
		: {};
const { seconds, font, color, showMinutes } = parsed;

const formatTime = time => {
	if (showMinutes) {
		let secondPart = time % 60;
		secondPart = secondPart < 10 ? `0${secondPart}` : secondPart;
		return `${Math.trunc(time / 60)}:${secondPart}`;
	}
	return time;
};

let currentSec = 0;
const print = () =>
	figlet(
		formatTime(currentSec),
		{
			font: font || conf.get("font.name"),
			horizontalLayout: conf.get("font.horizontalLayout"),
			verticalLayout: conf.get("font.verticalLayout"),
		},
		(err, figSecond) => {
			if (err) {
				console.log(
					err.code === "ENOENT"
						? chalk.red("inncorrect font specified")
						: err
				);
				process.exit();
			}

			// FigSecond to be printed after error check otherwise it will be undefined
			console.clear();
			console.log(color ? chalk[color](figSecond) : figSecond);

            currentSec++;
			// Check time after printing figSecond and then incrementing it
			if (currentSec > seconds) {
				process.exit();
			}
		}
	);

print();
setInterval(print, 1000);
