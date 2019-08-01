function reverse1(str) {
  const arrayString = str.split('');
  return arrayString.reverse().join('');
}
function reverse2(str) {
  let reversed = '';
  for(let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse3(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
module.exports = {
  reverse1,
  reverse2,
  reverse3
};

reverse1('hola');
