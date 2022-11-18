let arr = [
  [2, 5, 7],
  [11, 45, 96],
  [24, 56, [10, 15, 20], 99],
];

// using forEach

function flatArr1(item) {
  let res = [];

  item.forEach((ele) =>
    Array.isArray(ele) ? (res = res.concat(flatArr1(ele))) : res.push(ele)
  );

  return res;
}

// console.log(flatArr1(arr));

// using reduce

function flatArr2(item) {
  return item.reduce((acc, cur) =>
    acc.concat(Array.isArray(cur) ? flatArr1(cur) : cur)
  );
}

// console.log(flatArr2(arr));

// for loop

function flatArr3(item) {
  let res = [];

  for (let i = 0; i < item.length; i++) {
    if (Array.isArray(item[i])) {
      let flat = flatArr3(item[i]);
      res = res.concat(flat);
    } else {
      res.push(item[i]);
    }
  }

  return res;
}

console.log(flatArr3(arr));

// using flat method

// console.log(arr.flat(Infinity));
