// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// 1st Solution

//  Solve using hash map
// time complexity:  O(n)

function twoSum(arr, num) {
  let data = new Map();

  let i = arr.length;

  while (i--) {
    if (data.has(arr[i])) {
      return [i, data.get(arr[i])];
    }
    data.set(num - arr[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 18));

// 2nd Solution

// time complexity:  O(n^2)

let nums = [2, 7, 11, 15];
let target = 9;

function find2SumTo(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum > k) {
      right--;
    } else if (sum === k) {
      return [left, right];
    } else {
      left++;
    }
  }
}

console.log(find2SumTo(nums, target));
