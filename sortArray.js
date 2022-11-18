// Sort an array

let arr = [1, 21, 13, 4, 50, 6, 700, 80, 9, 100, 11, 12];

// Inbuild method

// console.log(arr.sort((a, b) => a - b));

// 2nd Method

function sortArray(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
}

function sortArray(data) {
  for (let i in data) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }
  return data;
}

// console.log(sortArray(arr));

// Sort using using recursion

let myArray = [2, 3, 1, 6, 8, 11, 9, 7, 4];
let newArray = [];
let i = 0;
let j = 1;

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortArray(arr) {
  if (isSorted(arr)) {
    newArray = arr;
    return;
  }

  if (arr[i] < arr[j]) {
    i++;
    j++;
    sortArray(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sortArray(arr);
  }
}
sortArray(myArray);
console.log(newArray);
