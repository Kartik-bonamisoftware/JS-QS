// Palindrome number

//  input : noon --> true
//  input : hello --> false

function palindrome(str) {
  if (typeof str === "number") {
    str = str.toString();
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      // [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(palindrome("noonq"));
console.log(palindrome(12321));
