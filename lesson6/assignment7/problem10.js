function foo(first, middle1, middle2, middle3, last) {
  return {
    first,
    middle: [middle1, middle2, middle3].sort(),
    last,
  };
}


let strings = ['a', 'b', 'c', 'd', 'e'];
let {first, middle, last} = foo(...strings);

console.log(first, middle.join(' '), last);