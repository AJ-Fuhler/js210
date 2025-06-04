function copyProperties(object1, object2) {
  let objectKeys = Object.keys(object1);

  for (let propertyName of objectKeys) {
    object2[propertyName] = object1[propertyName];
  }

  return objectKeys.length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }