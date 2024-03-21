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

printMatrix(averageTemp);