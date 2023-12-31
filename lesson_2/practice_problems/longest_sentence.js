// LS215 - Lesson 2 - Longest Sentence

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

// Orignal solution, failed edge case:

// function longestSentence(text) {
//   let sentences = text.split(/(?<=[!.?])/g) // Split text after '!', '.' or '?'
//                   .map(sentence => countAndSentenceArray(sentence))
//                   .sort((a,b) => b[0] - a[0])

//   console.log(sentences[0][1]);
//   console.log('');
//   console.log(`The longest sentence has ${sentences[0][0]} words.`);
// }

// function countAndSentenceArray(sentence) {
//   sentence = sentence.trim() // Trim whitespace around string.
//   return [wordCount(sentence), sentence];
// }

// function wordCount(text) {
//   return text.split(' ').length;
// }

// longestSentence(longText);

// Modified solution to handle edge case.

function longestSentence(text) {
  let sentences = text.split(/(?<=[!.?])/g) // Split text after '!', '.' or '?'
                  .map(sentence => countAndSentenceArray(sentence))
                  .sort((a,b) => b[0] - a[0])

  let numOfWords = sentences[0][0];
  let longestSentences = [];
  sentences.forEach((sentData) => {
    if (sentData[0] === numOfWords) {
      longestSentences.push(sentData[1]);
    }
  })

  console.log(longestSentences[0]);
  console.log('');
  console.log(`The longest sentence has ${numOfWords} words.`);
}

function countAndSentenceArray(sentence) {
  sentence = sentence.trim() // Trim whitespace around string.
  return [wordCount(sentence), sentence];
}

function wordCount(text) {
  return text.split(' ')
             .map((word) => {
               return (word.length > 0) ? 1 : 0;
             })
             .reduce((sum, num) => sum += num);
}

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.

longestSentence("Why not? Hello there! Why  not? Goodbye.");
// expected output:
// Hello there! *OR* Why  not?

// The longest sentence has 2 words.

// LS Solution

// function longestSentence(text) {
//   let sentenceArray = text.match(/\w[^.!?]*[.!?]/g);

//   let longest = sentenceArray.reduce((longest, currentSentence) => {
//     if (wordCount(longest) > wordCount(currentSentence)) {
//       return longest;
//     } else {
//       return currentSentence;
//     }
//   });

//   console.log(longest);
//   console.log('The longest sentence has ' + String(wordCount(longest)) + ' words.');
// }

// function wordCount(sentence) {
//   return sentence.split(/\s+/).length;
// }