let arr = [9, 20, 45000, 0, 2, 663, 1, 8000];

// inbuild method

// console.log(Math.max(...arr));

// using foor loop

let max = 0;

for (i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

// console.log(max);

// using reduce

console.log(arr.reduce((acc, curr) => (acc > curr ? acc : curr), 0));

let min = arr[0];

for (i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

// console.log(min);
