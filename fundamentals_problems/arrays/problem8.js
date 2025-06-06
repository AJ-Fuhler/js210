"use strict mode";

const slice = function(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  let slicedArray = [];

  for (let index = begin; index < end; index += 1) {
    slicedArray.push(array[index]);
  }

  return slicedArray;
};

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

const splice = function(array, start, deleteCount, ...args) {
  start       = Math.min(start, array.length);
  deleteCount = Math.min(deleteCount, array.length - start);

  let deleted = slice(array, start, start + deleteCount);
  let rest    = slice(array, start + deleteCount, array.length);

  array.length = start;
  array.push(...args);
  array.push(...rest);

  return deleted;
};

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');  //       [2, 3]
console.log(arr3);                         // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));
//            // []
// console.log(arr4);                                  // [1, "a", 2, 3]
// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]