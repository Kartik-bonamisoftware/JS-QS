// let array = [1, 1, 2, 2, 8, 3, 4, 4, 5, 6, 6, 7, 7, 8];

// function abc(arr) {
//   if (arr.length > 0) {
//     arr = arr.sort();
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] !== arr[j]) {
//         i++;
//         // arr[i] = arr[j];
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         console.log(arr);
//       }
//     }

//     return i + 1;
//   } else {
//     throw new Error("Invalid array");
//   }
// }

// console.log(abc(array));

// let data = [1, 2, 2, 5, 6, 5, 32, 8];

// let res = new Set(data);

// console.log(res);

let data = [1, 3, 2];

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);

  for (let j = 0; j < data.length; j++) {
    console.log(data[j]);
  }
}
