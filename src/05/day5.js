var fs = require("fs");
var text = fs.readFileSync("./input.txt", "utf-8");
const seatFile = text.split("\r\n")

let highestSeatId = 0;
let  seatingChart = new Array(128).fill(0).map(() => new Array(8).fill(0));

seatFile.forEach(ticket => {
    let rowOptions = [...Array(128).keys()];
    let columnOptions = [...Array(8).keys()];

    const boardingPassRow = ticket.slice(0,7);
    const boardingPassSeat = ticket.slice(7,10);

    for (let i in boardingPassRow) {
        if(boardingPassRow[i] === 'F'){
            rowOptions = rowOptions.slice(0 , Math.ceil(rowOptions.length / 2));
        } else if (boardingPassRow[i] === 'B'){
            rowOptions = rowOptions.slice(Math.floor(rowOptions.length / 2), rowOptions.length);
        }
    }

    for (let i in boardingPassSeat){
        if (boardingPassSeat[i] === 'L'){
            columnOptions = columnOptions.slice(0 , Math.ceil(columnOptions.length / 2));
        } else if (boardingPassSeat[i] === 'R'){
            columnOptions = columnOptions.slice(Math.floor(columnOptions.length / 2), columnOptions.length);
        }
    }
    
    const ID = parseInt(rowOptions * 8) + parseInt(columnOptions);
    seatingChart[rowOptions][columnOptions] = ID

    if (ID > highestSeatId){
        highestSeatId = ID;
    }
})


console.log("Part 1 - Height Seat ID: " + highestSeatId)
console.log("Part 2 - Seating Chart Map: ")
console.log(seatingChart)
