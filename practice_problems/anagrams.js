// Lesson 1 - Practice Problem: Anagrams

function anagram(word, list) {
  return list.filter(candidateWord => {
    return areAnagrams(candidateWord, word)
  });
}

function areAnagrams(candidate, match) {
  let sourceLetters = candidate.split('').sort();
  let matchLetters = match.split('').sort();
  return compareArrays(sourceLetters, matchLetters);
}

function compareArrays(arr1, arr2) {
  let equal = true;

  for (i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
      break;
    }
  }
  
  return equal;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]

// LS Solution, nicer `compareArras` function

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((letter, index) => letter === array2[index]);
}