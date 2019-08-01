function palindrome1 (str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed
}

function palindrome2 (str) {
  const { length } = str;
  return str.split('').every((val, index) => val == str[length - 1 - index]);
}

module.exports = {
  palindrome1,
  palindrome2
}
