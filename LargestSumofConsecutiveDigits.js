let array = [1, 2, 3, 4, 3, 5, 4, 6, 7, 8];

// Largest Sum of Consecutive Digits  , let say n = 4
// condition for loop ---->  array.length - n + 1

function abc(arr, num) {
  if (num > array.length) {
    throw new Error("Array length must be");
  } else {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += arr[i + j];

        if (temp > max) {
          max = temp;
        }
      }
    }
    return max;
  }
}

console.log(abc(array, 4));
