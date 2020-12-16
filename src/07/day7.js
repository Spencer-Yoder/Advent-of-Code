var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
var bagFile = text.split("\r\n")

let Part2_Total = -1;

let part1 = (bags, colors = {}) => bag => {
    bags.filter(line => line.indexOf(bag) > 0)
        .map(line => {
            const [ color ] = line.split(" bags contain ");
            colors[color] = 1;
            return color;
        })
        .forEach(part1(bags, colors));

    return Object.keys(colors).length;
};

function part2(bags, bag, count){
    const line = bags.find(row => row.indexOf(`${bag} bags contain `) === 0);
    Part2_Total = Part2_Total + count;

    if (!line.includes("no other bags")){
        let bagLines = line.replace(`${bag} bags contain `, "").replace(".", "").split(", ");

        bagLines.forEach(bagLine => {
            const [ num, description, color ] = bagLine.split(" ");
            const total = count * parseInt(num)
            part2(bags, `${description} ${color}`, total);
        });
    }

    return Part2_Total;
};

console.log("Part 1 - You will need this many colors: " + part1(bagFile, [])("shiny gold"));
console.log("Part 2 - Total number of bags needed: " + part2(bagFile, "shiny gold", 1));

