function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(new Date(2013, 2, 1, 1, 10).toDateString());
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));