function greetings(names, job) {
  let fullName = '';

  for (let index = 0; index < names.length; index += 1) {
    let name = names[index];
    if (!(index === names.length - 1)) {
      name += ' ';
    }

    fullName += name;
  }

  let title = job.title;
  let occupation = job.occupation;

  console.log(`Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

function betterGreetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' + status.title + status.occupation + ' around';

  console.log(nameGreet + ' ' + statusGreet);
}

betterGreetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });