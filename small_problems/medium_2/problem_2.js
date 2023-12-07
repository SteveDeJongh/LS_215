// JS210 - Small Problems - Medium 2 - Problem 2 - Triangle Sides

function triangle(x, y, z) {
  [x,y,z] = [x,y,z].sort();

  if (x + y <= z || x <= 0) {
    return "invalid";
  } else if (x === y && y === z) {
    return 'Equilateral'
  } else if (x === y || y === z) {
    return 'Isosceles'
  } else {
    return "Scalene"
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 0, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

console.log(triangle(3, 1.5, 1.5)); // invalid because shortest two values are not greater than longest.
console.log(triangle(3, 4, 4)); // isosceles, two longer values are equal.

// LS Solution

function triangle(side1, side2, side3) {
  const perimeter = side1 + side2 + side3;
  const longest = Math.max(side1, side2, side3);
  const shortest = Math.min(side1, side2, side3);
  const middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && (shortest + middle > longest);
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}