function reverseInt(n) {
  const sign = Math.sign(n)
  const abs=  Math.abs(n)
  return sign * parseInt(abs.toString().split('').reverse().join(''))

}

module.exports = reverseInt;
