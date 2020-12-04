var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
const TobogganMap = text.split("\r\n")

const ROW_LENGTH = 31;

function hitTrees(right, down) {
    let columnCount = 0
    let treeHits = 0;

    for (var i = 0; i < TobogganMap.length; i = i + down) {
        if (TobogganMap[i][columnCount] === '#') {
            treeHits++;
        }

        columnCount = columnCount + right;

        if (columnCount >= ROW_LENGTH) {
            columnCount = columnCount - ROW_LENGTH;
        }
    }
    return treeHits;
}

console.log("Part 1: Number of trees hit: " + hitTrees(3, 1))
console.log("Part 2: Number of trees hit: " + hitTrees(1, 1) * hitTrees(3, 1) * hitTrees(5, 1) * hitTrees(7, 1) * hitTrees(1, 2))