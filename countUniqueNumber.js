// count unique number

// [1,1,2,2,3,4,4,5,6,6,7,7,8]

// output --> 8

let array = [1, 1, 2, 3, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8];

function countUniqueNumber(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res.length;
}

// console.log(countUniqueNumber(array));

// Using Inbuild method

let res = new Set(array);

// console.log(res.size);

// 3rd Method

function countUniqueNumber1(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    console.log(arr);
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}
console.log(countUniqueNumber1(array));
