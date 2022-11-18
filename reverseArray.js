// Reverse an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Inbuild method

console.log(arr.reverse());

// 2nd method

function reverseArr(data, left, right) {
  while (left < right) {
    [data[left], data[right]] = [data[right], data[left]];

    reverseArr(data, left + 1, right - 1);
  }
  return data;
}

console.log(reverseArr(arr, 0, arr.length - 1));
