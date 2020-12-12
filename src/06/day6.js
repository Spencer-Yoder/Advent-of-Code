var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
const answersRows = text.split("\r\n")


function part1(){
    let part1_answers = 0;
    let inputAnswers = [];

    answersRows.forEach(row => {
        if(!row == ''){
            for (let ans in row) {
                const char = row[ans]
                if (!inputAnswers.includes(char)){
                    inputAnswers.push(char)
                }
            }
        } else {
            part1_answers = part1_answers + inputAnswers.length;
            inputAnswers = []
        }
    })
    return part1_answers;
}


function part2(){
    let part2_answers = 0;
    let inputAnswers = {};
    let groupCount = 0;

    answersRows.forEach(row => {
        if(!row == ''){
            groupCount++;
            for (let ans in row) {
                const char = row[ans]
                if (!!inputAnswers[char]){
                    inputAnswers[char].count = inputAnswers[char].count + 1;
                } else {
                    inputAnswers[char] = {count: 1}
                }
            }
        } else {
            let sameAnswersPerGroup = 0;

            for (const [key, value] of Object.entries(inputAnswers)) {
                if(value.count == groupCount){
                    sameAnswersPerGroup = sameAnswersPerGroup + 1
                }
            }
            part2_answers = part2_answers + sameAnswersPerGroup;
            inputAnswers = {}
            groupCount=0
        }
    })
    return part2_answers;
}


console.log("Part 1: " + part1())
console.log("Part 2: " + part2())
