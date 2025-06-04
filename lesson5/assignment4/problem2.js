function incrementProperty(object, propertyName) {
  let objectKeys = Object.keys(object);
  if (objectKeys.indexOf(propertyName) === -1) {
    object[propertyName] = 1;
  } else {
    object[propertyName] += 1;
  }

  return object[propertyName];
}