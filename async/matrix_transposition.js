const transpose = function (matrix) {
  let newArray = [];
  // console.log(matrix[0].length) //number of columns
  // console.log(matrix.length)    //number of rows


  for (let i = 0; i < matrix[0].length; i++)
   newArray.push([]);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newArray[col][row] = matrix[row][col];
    }
  }
  return newArray;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

// console.log(transpose([
//   [1, 2],  
//   [3, 4],
//   [5, 6],
// ])
// );