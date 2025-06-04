function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}