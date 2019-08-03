function chunk1(array, size) {
  const chunked = [];
  for(let element of array) {
    const last = chunked[chunked.length -1]
    if(!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked;
}

function chunk2(array, size) {
  const chunked = [];
  for(let i =0; i< array.length; i+= size) {
    chunked.push(array.slice(i, i +size))
  }
  return chunked
}

module.exports = {
  chunk1,
  chunk2
};
