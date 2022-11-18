// Anagram

// let say two string , hello & llohe , both contain same characters , so it is anagram

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};

  for (let item of str1) {
    count[item] = (count[item] || 0) + 1;
  }
  console.log(count);

  for (let i = 0; i < str2.length; i++) {
    if (count[str2[i]]) {
      count[str2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(anagram("hello", "llohe"));
