/*
var averageTempDay1 = [36.5, 26, 30, 25, 18, 40];
var averageTempDay2 = [19, 22.5, 20, 31, 23.5, 32,5];

var averageTemp = [];
averageTempDay[0] = averageTempDay1;
averageTempDay[1] = averageTempDay2;

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++)
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);}

}

printMatrix(averageTemp); */

// 

const matrix3x3x3 = [];

for(var i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (var j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
            }
    }
}

console.table(matrix3x3x3);

//

const zero = 9;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers.join(', '));

//

 