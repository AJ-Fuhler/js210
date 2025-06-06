function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let bar = obj.bar;
let baz = obj.bax;
let qux = obj.qux;
