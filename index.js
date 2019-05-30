module.exports = (arr, size = 2, clear = false) => {
  const newArr = []
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size))
  }
  return clear ? newArr.filter(arr => arr.length === size) : newArr
}
