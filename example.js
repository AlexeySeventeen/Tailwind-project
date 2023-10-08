function dblLinear(n) {
  // todo: make code faster (too much numbers in algorithm)
  // ?how uniq work
  // ?how sort work

  const res = [1];

  for (let index = 0; index < n; index++) {
    const new1 = res[index] * 2 + 1;
    res.push(new1);
    const new2 = res[index] * 3 + 1;
    res.push(new2);
    res.sort((a, b) => a - b);
  }

  const uniqObj = new Set(res);
  const uniqArray = Array.from(uniqObj);

  return uniqArray;
}

console.log(dblLinear(10));
