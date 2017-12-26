import test from 'ava'
import chunk from './'

let arr = [67, 233, 87, 13, 89, 113, 91, 111, 24]

test('chunk defaults work as expected', t => {
  t.deepEqual(chunk(arr), [[67, 233], [87, 13], [89, 113], [91, 111], [24]])
})

test('chunk with clear of true returns array with all similar sizes', t => {
  t.deepEqual(chunk(arr, 4, true), [[67, 233, 87, 13], [89, 113, 91, 111]])
})
