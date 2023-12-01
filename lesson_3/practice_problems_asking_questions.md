# Practice Problems: Asking Questions

# 1

Problem 1
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

Example

distinctString(["d","b","c","b","c","a"], 2); // "a"

# questions

Will we always be given 2 arguments? If an argument is ommitted what should i do? If there are extra arguments?
Will the first argument always be an array?
Will the second arg always be an integer?
Will the second arg ever be 0?
Will the second arg ever be negative?
Can the array be sparse?
Can the array contain any number of elements?
Can the array be empty?
Will strings always be one character long?
Will `k` always be positive and greater than 0?
Should i return an empty stirng if there aren't `k` distinct strings?

# 2

Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Example

thirdMax([3, 2, 1]); // 1

# Questions

Will the input always be an array? Can it be empty?
Will the array always consist of only integers?
Will the array always contain 3 or more elements?
Can the numbers in the array be negative or 0?

# 3

Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Example

primeNumberPrinter("a4bc2k13d"); // [2, 13]

# Questions

What is a prime number?
How should the string be split?
Should we split numbers into substrings of digits? ('a123') => 1, 2, 3, 12, 123
Will the argument always be a string?
Should we handle too few or too many arguments?
If the string doesn't contain any prime numbers, should i return an empty array?
Can the input string be empty?

# 4

​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Examples

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

# Questions

How should the resulting array be ordered?
Will we always be given an array as an arugment?
Will the array always be made up of sub arrays?
Can the elements be anything other than strings and numbers?
If they can be objects, are duplicate objects the same value or the same acutal object?
