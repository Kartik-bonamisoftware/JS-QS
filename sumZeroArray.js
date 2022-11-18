// Find the pair of elements whose sum is zero

// input -- [-5,-4,-2,0,1,3,4,6]

// output -- [-4,4]

let arr = [-5, -4, -2, 0, 1, 3, 4, 6, 8];

// Method 1

function sumZero1(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j < data.length; j++) {
      let sum = data[i] + data[j];
      if (sum === 0) {
        return [data[i], data[j]];
      }
    }
  }
}

// console.log(sumZero1(arr));

// Method 2

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2(arr));
