var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrayOfNumbers = text.split("\r\n")

var d = new Date();
var startTime = d.getTime();
var counter = 0;
while (true) {
    const first = parseInt(arrayOfNumbers[Math.floor(Math.random() * arrayOfNumbers.length)]);
    const second = parseInt(arrayOfNumbers[Math.floor(Math.random() * arrayOfNumbers.length)]);
    counter++;

    if (first + second == 2020) {
        var d1 = new Date();
        var endTime = d1.getTime();
        console.log(`${first} + ${second} = ${first + second}`)
        console.log(`${first} * ${second} = ${first * second}`)
        console.log(`Total execution time: ${endTime - startTime}`)
        console.log(`Total Number of checks: ${counter}`)

        return true;
    }
}
