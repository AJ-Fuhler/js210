
/*
--------------------- Problem ----------------------


------------ **Requirements** -------------
Inputs: array of subarrays
Output: transposed array of subarrays

Rules: 

- there will be at least 1 subarray.
- subarray indexes are rowIdx -- elements inside subarray are columnIdx.
- every columnIdx and rowIdx needs to be switched around:
  - The length of the subarray will determine how many subarrays there are supposed to be in the transposed matrix.
  - The length of the top-level array will determine how many elements there will be in each subarray.


------------- **Clarifying Questions** -------------
Q:
A:

Q:
A:

Q:
A:

Q:
A:

Q:
A:

Q:
A:

Q:
A:

Q:
A:
------------ Examples/Test Cases/Edge's ------------


------------------ Data Structures ------------------
- array

-------------------- Algorithm ---------------------
1. init `result` to []
2. init map and use the length of the first subarray -1 to create keys corresponding to each index, with values of empty arrays.
3. for each subarray
  - for each element, idx in the subarray
    - append element to map[idx]
4. for each key from lowest to highest in map
  - append map[key] to result
5. return result

              **** helper functions ****


---------------------- Notes -----------------------

*/

function transpose(matrix) {
  let result = [];
  matrix[0].forEach(_ => result.push([]));


  matrix.forEach(subArray => {
    subArray.forEach((elem, idx) => {
      result[idx].push(elem);
    });
  });


  return result;
}

console.log(transpose([[1, 2, 3, 4]])) // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])) // [[1, 2, 3, 4]]
console.log(transpose([[1]])) // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]])) // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
