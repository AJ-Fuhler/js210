const template1 = 'The ${adjective} brown ${noun} ${adverb} ' + 
'${verb} the ${adjective} yellow ${noun}, who ${adverb} ' + 
'${verb} his ${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

let madlibs = function(template) {
  let REPLACEMENT_WORDS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceWord(word) {
    let key = word.replace(/[^a-z]/g, '');
    let index = Math.floor(Math.random() * REPLACEMENT_WORDS[key].length);
    return REPLACEMENT_WORDS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceWord);
}

console.log(madlibs(template1));
console.log();
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log();
console.log(madlibs(template2));
