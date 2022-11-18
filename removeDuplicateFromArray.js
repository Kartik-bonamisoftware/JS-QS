// Remove duplicate element from array

let data = [1, 2, 2, 5, 6, 5, 32, 8];

// Inbuild method

let newArray = new Set(data);
// console.log(newArray);

// 2nd method

function removeDuplicate1(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!res.includes(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

// console.log(removeDuplicate1(data));

// 3rd method

function removeDuplicate2(array) {
  let res = [];

  array.forEach((ele, i, arr) => {
    if (!res.includes(ele)) {
      res.push(ele);
    }
  });
  return res;
}

// console.log(removeDuplicate2(data));

// 4th method

function removeDuplicate3(array) {
  let res = array.filter((ele, index) => array.indexOf(ele) == index);
  return res;
}

// console.log(removeDuplicate3(data));

// 5th method

function removeDuplicate4(array) {
  return array.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

console.log(removeDuplicate4(data));
