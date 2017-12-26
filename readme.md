# arr-chunk [![Build Status](https://travis-ci.org/cdrainxv/arr-chunk.svg?branch=master)](https://travis-ci.org/cdrainxv/arr-chunk)

## install

> $ npm install --save arr-chunk

## usage

> chunk(arr, [size = 2], [clear = false])

**arr :: Array** : An array. Required.
**size :: Int** : Size of the array chunks. Default is 2.
**clear :: Boolean** : Whether to return ***only*** an array of the
elements that fit within the size specified. Default is false.  

**Default**
```js
const chunk = require('arr-chunk')

const arr = [111, 89, 13, 678]
const arrChunked = chunk(arr)
// arrChunked -> [[111, 89], [13, 678]]
```

**Default**
```js
const chunk = require('arr-chunk')

const arr = [111, 89, 13, 678, 98, 123, 324, 56, 23, 987]
const arrChunked = chunk(arr, 4, true)
// arrChunked -> [[111, 89, 13, 678], [98, 123, 324, 56]]
```



## License
MIT &copy; | cdrainxv
