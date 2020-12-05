var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
const batchFileLines = text.split("\r\n")

let birthYear, issueYear, expirationYear, height, hairColor, eyeColor, passportID, countryID = false


function part1() {
    let validPassportsPart1 = 0;

    batchFileLines.forEach(line => {
        const element = line.split(/[\s:]+/)
        element.forEach(key => {
            if (key.includes('byr')) {
                birthYear = true;
            }
            if (key.includes('iyr')) {
                issueYear = true;
            }
            if (key.includes('eyr')) {
                expirationYear = true;
            }
            if (key.includes('hgt')) {
                height = true;
            }
            if (key.includes('hcl')) {
                hairColor = true;
            }
            if (key.includes('ecl')) {
                eyeColor = true;
            }
            if (key.includes('pid')) {
                passportID = true;
            }
        })

        if (line == '') {
            if (birthYear && issueYear && expirationYear && height && hairColor && eyeColor && passportID) {
                validPassportsPart1++;
            }
            birthYear = issueYear = expirationYear = height = hairColor = eyeColor = passportID = false
        }
    })

    return validPassportsPart1;
}

function validateValue(min, max, value) {
    return parseInt(value) >= min && parseInt(value) <= max
}


function part2() {
    let validPassports = 0;

    batchFileLines.forEach(line => {
        const element = line.split(/[\s:]+/)

        if (line !== '') {
            element.forEach((key, index) => {
                if (key.includes('byr') && validateValue(1920, 2002, element[index + 1])) {
                    birthYear = true;
                }

                if (key.includes('iyr') && validateValue(2010, 2020, element[index + 1])) {
                    issueYear = true;
                }

                if (key.includes('eyr') && validateValue(2020, 2030, element[index + 1])) {
                    expirationYear = true;
                }

                if (key.includes('hgt')) {
                    if (element[index + 1].includes('cm') && validateValue(150, 193, element[index + 1])) {
                        height = true;
                    } else if (element[index + 1].includes('in') && validateValue(59, 76, element[index + 1])) {
                        height = true;
                    }
                }

                if (key.includes('hcl')) {
                    hairColor = element[index + 1].match(/(#[a-fA-F0-9]{6})\b/);
                }

                if (key.includes('ecl')) {
                    const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                    colors.forEach(i => {
                        if (element[index + 1] == i) {
                            eyeColor = true;
                        }
                    })
                }

                if (key.includes('pid') && element[index + 1].length == 9) {
                    passportID = true;
                }
            })
        } else if (line == '') {
            if (birthYear && issueYear && expirationYear && height && hairColor && eyeColor && passportID) {
                validPassports++;
            }
            birthYear = issueYear = expirationYear = height = hairColor = eyeColor = passportID = false
        }
    })

    return validPassports
}


console.log("Total Number of Valid Passports Part 1: " + part1())
console.log("Total Number of Valid Passports Part 2: " + part2())
