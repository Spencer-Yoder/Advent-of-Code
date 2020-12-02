var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrayOfNumbers = text.split("\r\n")

var d = new Date();
var startTime = d.getTime();
var counter = 0;
while (true) {
    counter++;
    const first = Math.floor(Math.random() * 2020);
    const second = Math.floor(Math.random() * 2020);

    if (first + second == 2020) {
        if (arrayOfNumbers.includes(first.toString()) && arrayOfNumbers.includes(second.toString())) {
            var d1 = new Date();
            var endTime = d1.getTime();
            console.log(`${first} + ${second} = ${first + second}`)
            console.log(`${first} * ${second} = ${first * second}`)
            console.log(`Total execution time: ${endTime - startTime}`)
            console.log(`Total Number of checks: ${counter}`)
            return true;
        }
    }
}
