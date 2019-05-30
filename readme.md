# arr-chunk [![Build Status](https://travis-ci.org/cdrani/arr-chunk.svg?branch=master)](https://travis-ci.org/cdrani/arr-chunk)

## install

> npm install arr-chunk

or

> yarn add arr-chunk

## usage

> chunk(arr, size = 2, clear = false)

**arr :: Array** : An array. Required.

**size :: Int** : Size of the array chunks. Default is 2.

**clear :: Boolean** : If **true**, chunks with less elements than the specified size are *removed*. Default is **false**.

**defaults**

```js
const chunk = require('arr-chunk')

const arr = [111, 89, 13, 678, 78]
const chunked = chunk(arr)
// chunked -> [[111, 89], [13, 678], [78]]
```

**options**

```js
const chunk = require('arr-chunk')

const arr = [111, 89, 13, 678, 98, 123, 324, 56, 23, 987]
const chunked = chunk(arr, 4, true)
// chunked -> [[111, 89, 13, 678], [98, 123, 324, 56]]
```

## license

mit &copy; | cdrani
