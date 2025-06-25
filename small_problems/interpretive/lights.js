/*

input: integer representing number of switches and number or repetitions
output: array of integers representing switches that are currently on.

- if 5 is the argument, we create 5 switches, 1, 2, 3, 4, 5
- all are true (on) at first
-

questions


D
- object containing switches as keys and true as their initial value

A:
- create switches object {}
- for range of 1 through number of switches
- add switch with num to object and set initial value to true;
- init step = 2;

- create arr containing switches keys
- loop this number of switches - 1
- starting at idx start, iterate through all the keys, with steps of step
  - toggle switches at switches[idx]
  - step += 1;

- return an array of all keys that are currently toggled on (filter)

*/

function lightsOn(numberOfSwitches) {
  let switches = {};
  for (let num = 1; num <= numberOfSwitches; num += 1) {
    switches[num] = true;
  }

  let step = 2;
  let switchesKeys = Object.keys(switches);
  let startIndex = 1;
  let completedRounds = 0;
  while (completedRounds < numberOfSwitches) {
    for (let idx = startIndex; idx < switchesKeys.length; idx += step) {
      let currentSwitchKey = switchesKeys[idx];
      switches[currentSwitchKey] = !switches[currentSwitchKey];
    }
    step += 1;
    startIndex += 1;
    completedRounds += 1;
  }

  return switchesKeys.filter(key => switches[key] === true);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]