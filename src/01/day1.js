var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrayOfNumbers = text.split("\r\n")

var d = new Date();
var startTime = d.getTime();
for (var i = 0; i <= arrayOfNumbers.length; i++) {
    for (var n = i; n <= arrayOfNumbers.length; n++) {
        const first = parseInt(arrayOfNumbers[i]);
        const second = parseInt(arrayOfNumbers[n]);

        if (first + second == 2020) {
            var d1 = new Date();
            var endTime = d1.getTime();
            console.log(`${first} + ${second} = ${first + second}`)
            console.log(`${first} * ${second} = ${first * second}`)
            console.log(`Total execution time: ${endTime - startTime}`)
        }
    }
}
