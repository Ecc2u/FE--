//lodash 实践

var ecc2u = {
  chunk: function (array, size) {
    var res = []
    var item = []
    var index = 1
    for (let i = 1; i <= size ; i++) {
      item.push(array[i])

    }
    return res
  },
  compact: function (array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== false && array[i] !== 0 && array[i] !== null && array[i] !== "" && array[i] !== NaN) {
        res.push(array[i])
      }
    }
    return res
  },
  difference: function (array, ...array2) {
    
  },
  differenceBy: function (array, array2, iteratee) {

  },
  differenceWith: function () {

  },
  drop: function (array, n = 1) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (i >= n) {
        res.push(array[i])
      }
    }
    return res
  },
  dropRight: function (array, n = 1) {
    return drop(array.reverse(),n).reverse()
  },
  dropRightWhile: function (array, predicate) {

  },
  dropWhile: function () {

  },
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = 0; i < array.length; i++) {
      if (i >= start && i < end) {
        array[i] = value
      }
    }
    return array
  },
  findIndex: function (array,predicate) {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }else return -1
    }
  },
  findLastIndex: function () {

  },
  flatten: function () {

  },
  flattenDeep: function () {

  },
  flattenDepth: function () {

  },
  fromPairs: function () {

  },
  head: function () {

  },
  indexOf: function () {

  },
  initial: function () {

  },
  intersection: function () {

  },
  intersectionBy: function () {

  },
  intersectionWith: function () {

  },
  join: function () {

  },
  last: function () {

  },





























}
