/* Problem 6

Merge Sort

Problem:
Input: Single layer array
Output: Single layer array, now sorted

Rules:
  Must merge element into sub arrays, and then sort those back to a single layer array.

Examples:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]


[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]

*/

function merge(ar1, ar2) {
  let result = [];
  let clone1 = ar1.slice(0);
  let clone2 = ar2.slice(0);

  while (clone1.length > 0 || clone2.length > 0) {
    if (clone1[0] <= clone2[0] || clone2[0] === undefined) {
      result.push(clone1.shift());
    } else {
      result.push(clone2.shift());
    }
  }

  return result;
}

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]