// Checking Square in another array
// arr1=[1,2,3,4], arr2=[1,4,9,16]

// function checkSquare(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] * arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkSquare([1, 2, 3, 4], [16, 4, 9, 1]));

// function checkSquare(arr1, arr2) {

//     let count = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     let sqr = arr1[i] * arr1[i];
//     for(let j = 0; j < arr2.length; j++){
//         if(sqr === arr2[j]){
//             count++;
//       }
//   }
// }
// if(count === arr2.length) return true;
// return false;
// }

// console.log(checkSquare([1, 2, 3, 4], [16, 4, 9, 1]));

// 3rd way using new Set

function checkSquare3(arr1, arr2) {
  let a = new Set(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (!a.has(arr1[i] * arr1[i])) {
      return false;
    }
  }
  return true;
}

console.log(checkSquare3([1, 2, 3, 4], [16, 4, 9, 10]));

// 4th way using object
function checkSquare(arr1, arr2) {
  let a = {};

  for (let i = 0; i < arr2.length; i++) {
    a[arr2[i]] = (a[arr2[i]] || 0) + 1;
  }

  for (let item of arr1) {
    let sqr = item * item;
    if (a[sqr]) {
      a[sqr] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkSquare([1, 2, 3, 4], [16, 4, 9, 1]));
