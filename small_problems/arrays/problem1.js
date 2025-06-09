let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();
// or

const myOtherArray = [];

for (let element of myArray) {
  myOtherArray.push(element);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);