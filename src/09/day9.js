var fs = require("fs");
var encryptedFile = fs.readFileSync("./input.txt", "utf-8").split("\r\n")

function part1(){
    let lowerBound = 0;
    let upperBound = 24;
    let part1_currentPosition = 25;

    while(!!encryptedFile[part1_currentPosition]){
        let isFound = false;
        outerloop:
        for (var i = lowerBound; i <= upperBound; i++) {
            for (var j = i; j <= upperBound; j++) {
                if(parseInt(encryptedFile[i]) + parseInt(encryptedFile[j]) == parseInt(encryptedFile[part1_currentPosition])){
                    isFound = true
                    break outerloop;
                }
            }
        }
        
        if(!isFound){
            break;
        }
        part1_currentPosition++;
        lowerBound++;
        upperBound++;
    }
    return encryptedFile[part1_currentPosition];
}

function rangeSum (total, rangeArray) {
    let tempTotal = 0;
    for (let i = 0; i < rangeArray.length; i++) {
        tempTotal += parseInt(rangeArray[i])
    }

    if ( tempTotal == parseInt(total)) {
        return true
    } 
    return false 
}

function part2(part1_ans){
    let lowerBound = 0;
    let upperBound = 24;
    let currentPosition = 25;
    let part2_ans = 0;

    while(!!encryptedFile[currentPosition]){
        let isFound = false;
        outerloop:
        for (var i = lowerBound; i <= upperBound; i++) {
            let rangeArray = [];
            for (var j = i; j <= upperBound; j++) {
                rangeArray.push(encryptedFile[j])

                if (rangeSum(part1_ans, rangeArray)) {
                    rangeArray.sort(function(a, b){return b - a});
                    return part2_ans = parseInt(rangeArray[0]) + parseInt(rangeArray[rangeArray.length - 1])
                }

                if(parseInt(encryptedFile[i]) + parseInt(encryptedFile[j]) == parseInt(encryptedFile[currentPosition])){
                    isFound = true
                    break outerloop;
                }
            }
        }
        
        if(!isFound){
            break;
        }
        currentPosition++;
        lowerBound++;
        upperBound++;
    }
}

const part1_ans = part1();
console.log("Part 1: First Number that can't be found: "  + part1_ans)
console.log("Part 2: Sum of first and last in range: "  + part2(part1_ans))
