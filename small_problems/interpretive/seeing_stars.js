/*

Write a function that displays an 8-pointed star in an nxn grid, where n is an
odd integer that is supplied as an argument to the function. The smallest such
star you need to handle is a 7x7 grid (i.e., when n is 7).

rules
- first row has stars at first, middle, and n index
- second row has stars at 2nd, middle, n - 1 index
- third row has stars at 3rd, middle, and n-2 index
- fourth row has stars at 4th middle, and n-3 index;
- middle row has stars n stars, filling up the whole row.
- after middle row, we reverse the process.

D:
- loops
- firstStar var
- middleStar variable
- secondStar var

A:

-given n (odd integer) as argument
- firstStarIndex = 0;
- ThirdStar Index = n - 1;
- middleStarIndex = Math.floor(n / 2);
- middleRowNumber = Math.ceil(n / 2);
- iterate over 1 through middleRowNumber (exclusive)
  - create an array with n elements, all containing spaces.
  - at index firstStarIndex, reassign to *
  - at index middleStarIndex, reassign to *
  - at index middleStarIndex, reassign to *
  - if round < 4
    - firstStarIndex += 1
    - thirdStarIndex -= 1
  - print joined version of array;
- print '*'.repeat(n);
- iterate from 1 through middle row number (exclusive)
  - create array with n elements, all containing single spaces
  - at index firstStarIndex, reassign to *
  - at index middleStarIndex, reassign to *
  - at index middleStarIndex, reassign to *
  - firstStarIndex -= 1
  - thirdStarIndex += 1;
  - print joined version of array;


*/

function createRow(numberOfRows, firstStarIndex, middleStarIndex, thirdStarIndex) {
  let row = Array(numberOfRows).fill(' ');
  row[firstStarIndex] = '*';
  row[middleStarIndex] = '*';
  row[thirdStarIndex] = '*';
  return row.join('');
}

function star(numberOfRows) {
  let firstStarIndex = 0;
  let middleStarIndex = Math.floor(numberOfRows / 2);
  let thirdStarIndex = numberOfRows - 1;
  let middleRowNumber = Math.ceil(numberOfRows / 2);
  let rows = [];

  for (let round = 1; round < middleRowNumber; round += 1) {
    rows.push(createRow(numberOfRows, firstStarIndex,
      middleStarIndex, thirdStarIndex));

    firstStarIndex += 1;
    thirdStarIndex -= 1;
  }

  rows.forEach(row => console.log(row));
  console.log('*'.repeat(numberOfRows));
  rows.reverse().forEach(row => console.log(row));
}

star(9);