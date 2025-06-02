function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index += 1) {
    if (searchString[index] !== string[index]) {
      console.log(false);
      return;
    }
  }

  console.log(true);
  return;
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false