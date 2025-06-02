function repeat(string, times) {
  if (Number.isInteger(times) && times >= 0) {
    let result = "";
    for (let count = 0; count < times; count += 1) {
      result += string;
    }

    console.log(result);
  } else {
    console.log(undefined);
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined