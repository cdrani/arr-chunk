module.exports = (arr, size = 2, clear = false) => {
  let newArr = []
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return clear ? newArr.filter(arr => arr.length === size) : newArr
}
