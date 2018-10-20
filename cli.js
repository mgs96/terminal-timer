// see the readme for todos
const chalk = require("chalk");

module.exports = args => {
    // using an objects because we will need to return an object in future additions
    const parsed = {};
    parsed.seconds = Number(args[2]);
    args.forEach((el, i) => {
        switch (el) {
            case "-f":
            case "--font":
                if (args.length > i + 1)
                    parsed.font = args[i + 1]
                else {
                    console.log(chalk.red("font not specified"));
                    process.exit();
                }
                break;

            default:
                break;
        }
    });
    return parsed;
};
