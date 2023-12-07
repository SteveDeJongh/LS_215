// JS210 - Small Problems - Medium 2 - Problem 7 - Bubble Sort

// Rules:
// if left side element is great than right side element, swap elements.
// repreat process until all loop concludes with no swaps
// if no swap has been done, return array

// Algorithm:
// initialize a `swap` variable to true
// loop while swap is true
  // set swap to false
  // loop from 0 to array length - 1
  //   if current index is less than next idnex, do nothing.
  //   if it isn't,
    // swap values
    // set swap to true
    // break from loop
// return array

// Code:

function bubbleSort(arr) {
  let swap = true;
  while (swap) {
    swap = false;
    for (i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] <= arr[i+1]) {
        continue;
      } else {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
        break;
      }
    }
  }
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// LS Solution

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}