var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var dirtyPasswordsInput = text.split("\r\n")


var correctPassword = 0;
var correctPasswordPart2 = 0;

dirtyPasswordsInput.forEach(passwordRow => {
    const [min, max, char, password] = passwordRow.split(/[\s,\:,\-]+/)

    // Part 1
    var count = 0;
    for (var i = 0; i < password.length; i++) {
        if (char.match(password[i])) {
            count++;
        }
    }
    if (count >= min && count <= max) {
        correctPassword++;
    }

    // Part 2
    const validLetter1 = char === password[parseInt(min) - 1] ? 1 : 0;
    const validLetter2 = char === password[parseInt(max) - 1] ? 1 : 0;
    if (validLetter1 + validLetter2 === 1) {
        correctPasswordPart2++;
    }
})

console.log("Total Number of Correct Passwords Part 1: " + correctPassword)
console.log("Total Number of Correct Passwords Part 2: " + correctPasswordPart2)
