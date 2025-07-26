function transpose(matrix) {
  let newMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix[0].length; rowIndex += 1) {
    let newRow = [];
    for (let columnIdx = 0; columnIdx < matrix.length; columnIdx += 1) {
      newRow.push(matrix[columnIdx][rowIndex]);
    }

    newMatrix.push(newRow);
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
