function determinant(matrix) {
  const array = [];
  array.length = (matrix.length - 1) ;
  console.log(array.fill([], 0));
}

console.log(
  determinant([
    [2, 4, 2],
    [3, 1, 1],
    [1, 2, 0],
  ])
);
