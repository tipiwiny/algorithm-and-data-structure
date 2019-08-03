
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = number => {
    for (let row = 0; row < number; row++) {
        let stair = "";
        for (let column = 0; column < number; column++) {
          stair += column <= row ? "#" : " ";
        }
      console.log(stair);
    }

};


const recursiveSteps = (n, row = 0, stair = '') => {
  if(n == row) {
    return
  }
  if( n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }
  if(stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair);
}

module.exports = {steps, recursiveSteps};
