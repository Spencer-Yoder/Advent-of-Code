var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var arrayOfNumbers = text.split("\r\n")

//Part 1
for (var i = 0; i <= arrayOfNumbers.length; i++) {
    for (var n = i; n <= arrayOfNumbers.length; n++) {
        const first = parseInt(arrayOfNumbers[i]);
        const second = parseInt(arrayOfNumbers[n]);

        if (first + second == 2020) {
            var d1 = new Date();
            var endTime = d1.getTime();
            console.log("Part 1");
            console.log(`${first} + ${second} = ${first + second}`)
            console.log(`${first} * ${second} = ${first * second}`)
            console.log(counter)
            break;
        }
    }
}

//Part 2
for (var i = 0; i <= arrayOfNumbers.length; i++) {
    for (var n = i; n <= arrayOfNumbers.length; n++) {
        for (var j = n; j <= arrayOfNumbers.length; j++) {
            const first = parseInt(arrayOfNumbers[i]);
            const second = parseInt(arrayOfNumbers[n]);
            const third = parseInt(arrayOfNumbers[j]);

            if (first + second + third == 2020) {
                console.log("\nPart 2");
                console.log(`${first} + ${second} + ${third} = ${first + second + third}`)
                console.log(`${first} * ${second}  * ${third} = ${first * second * third}`)
                break;
            }
        }
    }
}
