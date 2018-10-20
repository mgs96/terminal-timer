const clargsHandler = require("./cli");
const figlet = require("figlet");

let seconds = 10,
  currentSec = 0; // 10 is deafult
if (process.argv.length > 2)
  seconds = clargsHandler(Array.prototype.slice.call(process.argv, 2)).seconds;

const print = () =>
  figlet(
    String(currentSec),
    {
      font: "Roman",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
    },
    (err, figSecond) => {
      currentSec++;
      if (err) {
        console.log("an error occured");
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
