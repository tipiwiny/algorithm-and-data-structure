function maxChar (str) {
  const charMap = {};
  for(let char of str) {
    charMap[char] = char[char] + 1 || 1;
  }
  let maxChar = '';
  let max = 0
  for(let char in charMap) {
    if(charMap[char]>max) {
      max = charMap[char]
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
