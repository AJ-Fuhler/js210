// The following program is expected to log each number between 0 and 9
// (inclusive) that is a multiple of 3. Read through the code shown below. Will
// it produce the expected result? Why or why not?

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// this code will get stuck in an infinite loop right away, since the
// incrementing is placed inside the else block. This means that if the
// remainder === 0 (which it is in the first iteration: 0 % 3 === 0), we log i
// (0) but never execute the else block that increments i. So we will infinitely
// log 0.