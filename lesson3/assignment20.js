function substring(string, start, end) {
  if (start === end) {
    return "";
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || Number.isNaN(Number(start))) {
    start = 0;
  }

  if (end < 0 || Number.isNaN(Number(end))) {
    end = 0;
  }
  newStart = Math.min(start, end);
  newEnd = Math.max(start, end);

  if (newStart > string.length) {
    newStart = string.length;
  }


  if (newEnd > string.length) {
    newEnd = string.length;
  }

  let newString = "";
  for (let index = newStart; index < newEnd; index += 1) {
    newString += string[index];
  }

  return newString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));
console.log(substring(string, 8, 20));