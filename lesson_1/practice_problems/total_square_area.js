// Lesson 1 - Practice Problem: Total Square Area

// A

function totalArea(rectangles) {
  let areas = rectangles.map(([l, w]) => l * w);
  let totalArea = areas.reduce((sum, area) => sum + area);
  return totalArea;
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

// LS Solution

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}

// B

function totalSquareArea(rectangles) {
  let areas = rectangles.filter((shape) => shape[0] === shape[1]);
  return totalArea(areas);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121