const multiplyFruit = ([ fruit, quantity ]) => {
  return Array(quantity).fill(fruit);
};

const buyFruit = fruitsList => fruitsList.flatMap(multiplyFruit);

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));