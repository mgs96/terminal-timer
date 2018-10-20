const figlet = require("figlet");
const chalk = require("chalk");
const clargsHandler = require("./cli");

let parsed = process.argv.length > 2 ? clargsHandler(Array.prototype.slice.call(process.argv, 2)) : {};
let { seconds, font } = parsed, currentSec = 0;

const print = () =>
    figlet(
        String(currentSec),
        {
            font: font || "Roman",
            horizontalLayout: "full",
            verticalLayout: "fitted",
        },
        (err, figSecond) => {
            currentSec++;
            if (err) {
                console.log(err.code === "ENOENT" ? chalk.red("inncorrect font specified") : err);
                process.exit();
            }
            // figSecond to be printed after error check otherwise it will be undefined
            console.clear();
            console.log(figSecond);
            // checkt time after printing figSecond
            if (currentSec > seconds) process.exit();
        }
    );

print();
setInterval(print, 1000);
