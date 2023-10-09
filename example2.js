function determinant(mAll) {
  function determOf2(array) {
    return array[0][0] * array[1][1] - array[0][1] * array[1][0];
  }

  function determOf3(m) {
    const m1 = [
      [m[1][1], m[1][2]],
      [m[2][1], m[2][2]],
    ];
    const m2 = [
      [m[1][0], m[1][2]],
      [m[2][0], m[2][2]],
    ];
    const m3 = [
      [m[1][0], m[1][1]],
      [m[2][0], m[2][1]],
    ];

    const res =
      m[0][0] * determOf2(m1) -
      m[0][1] * determOf2(m2) +
      m[0][2] * determOf2(m3);

    return res;
  }

  if (mAll.length === 1) {
    return +mAll.join();
  }

  if (mAll.length === 2) {
    return +determOf2(mAll);
  }

  if (mAll.length === 3) {
    return determOf3(mAll);
  }

  if (mAll.length === 4) {
    const m1 = [
      [mAll[1][1], mAll[1][2], mAll[1][3]],
      [mAll[2][1], mAll[2][2], mAll[2][3]],
      [mAll[3][1], mAll[3][2], mAll[3][3]],
    ];
    const m2 = [
      [mAll[1][0], mAll[1][2], mAll[1][3]],
      [mAll[2][0], mAll[2][2], mAll[2][3]],
      [mAll[3][0], mAll[3][2], mAll[3][3]],
    ];
    const m3 = [
      [mAll[1][0], mAll[1][1], mAll[1][3]],
      [mAll[2][0], mAll[2][1], mAll[2][3]],
      [mAll[3][0], mAll[3][1], mAll[3][3]],
    ];
    const m4 = [
      [mAll[1][0], mAll[1][1], mAll[1][2]],
      [mAll[2][0], mAll[2][1], mAll[2][2]],
      [mAll[3][0], mAll[3][1], mAll[3][2]],
    ];

    const res =
      mAll[0][0] * determOf3(m1) -
      mAll[0][1] * determOf3(m2) +
      mAll[0][2] * determOf3(m3) -
      mAll[0][3] * determOf3(m4);

    return res;
  }
}

console.log(
  determinant([
    [1, 2, 1, 3],
    [2, 1, 4, 1],
    [3, 3, 2, -1],
    [4, 2, 2, -1],
  ])
);
