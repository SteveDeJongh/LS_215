// LS215 - Lesson 2 - Matching Parenthesis

function isBalanced(string) {
  let tally = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      tally += 1;
    } else if (string[i] === ')') {
      tally -= 1;
    }

    if (tally < 0) {
      return false;
    }
  }

  return tally === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false