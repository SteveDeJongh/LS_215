/* Problem 1 start : 05

Problem:
Input: TBD
Output: Output a multi line strings with nouns, verbs, adverbs, and adjectives inserted
Rules:
  Must insert random adjective, nouns, verbs, and adverbs.

adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly

Questions:
  what can i use for a template?

Examples:

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

Data Structure:
Arrays
Strings

Algorithm:

split string on spaces
  map over each word in string
    if word contains 'verb'
      replace witha randomn verb word.

Code:

*/

function madlibs(template) {
  let words = template.split(' ');

  words = words.map(word => {
    if (word.match(/adverb/i)) {
      return randomAdverb();
    } else if (word.match(/verb/i)) {
      return randomVerb();
    } else if (word.match(/noun/i)) {
      return randomNoun();
    } else if (word.match(/adjective/i)) {
      return randomAdjective();
    } else {
      return word;
    }
  })

  return words.join(' ');
}

function randomAdverb() {
  let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];
  let index = randomnNumber(0, adverbs.length - 1);
  return adverbs[index];  
}

function randomVerb() {
  let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats']
  let index = randomnNumber(0, verbs.length - 1);
  return verbs[index];
}

function randomNoun() {
  let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let index = randomnNumber(0, nouns.length - 1);
  return nouns[index];
}

function randomAdjective() {
  let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let index = randomnNumber(0, adjectives.length - 1);
  return adjectives[index];
}

function randomnNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(madlibs('The adjective brown noun adverb ' +
'verb the adjective yellow ' + 
'noun, who adverb verb his ' +
'noun and looks around'))

// LS Solution

const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceText(match) {
    const key = match.replace(/[^a-z]/g, '');
    const index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}