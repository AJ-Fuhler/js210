let today = new Date();

function dateSuffix(dayOfMonth) {
  let suffix = 'th'

  if (dayOfMonth === 1) {
    suffix = 'st';
  } else if (String(dayOfMonth).endsWith('2')) {
    suffix = 'nd';
  } else if (String(dayOfMonth).endsWith('3')) {
    suffix = 'rd'
  }

  return `${dayOfMonth}${suffix}`;
}

function formattedMonth(monthNumber) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthNumber];
}

function formattedDay(dayNumber) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[dayNumber];
}

function formattedDate(date) {
  let day = formattedDay(date.getDay());
  let month = formattedMonth(date.getMonth());
  let dayOfMonth = dateSuffix(date.getDate());

  console.log(`Today's date is ${day}, ${month} ${dayOfMonth}.`)
}

formattedDate(today);
console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime())

let tomorrow = new Date(today.getTime());

tomorrow.setDate(6);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());