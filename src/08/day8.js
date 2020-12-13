var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
const instructionFile = text.split("\r\n")

let position = 0;
let accumulator = 0;

while(!!instructionFile[position]){
    const [operation, argument ] = instructionFile[position].split(" ");

    switch (operation){
        case 'nop':
            instructionFile[position] = null;
            position++
            break;
        case 'acc':
            accumulator = accumulator + parseInt(argument);
            instructionFile[position] = null;
            position++
            break;
        case 'jmp':
            instructionFile[position] = null;
            position = position + parseInt(argument);
            break;
    }
}

console.log("Part 1 - accumulator total: " + accumulator)

