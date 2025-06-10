function double(number) {
  return number + number;
}

function makeDoubler(caller) {
  return function (number) {
    console.log(`This function was called by ${caller}.`);
    return double(number);
  };
}

const doubler = makeDoubler('AJ');
console.log(doubler(5));