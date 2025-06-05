function randomNum(num1, num2) {
  if (min === max) {
    return min;
  }

  min = Math.min(num1, num2);
  max = Math.max(num1, num2);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let count = 0; count < 100; count += 1) {
  console.log(randomNum(1, 99));
}