//lodash 实践

var ecc2u = {
  chunk: function (array, size) {
    var res = []
    var item = []
    var index = 1
    for (let i = 1; i <= size; i++) {
      item.push(array[i])

    }
    return res
  },
  compact: function (array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },
  // difference: function (array, ...array2) {

  // },
  // differenceBy: function (array, array2, iteratee) {

  // },
  // differenceWith: function () {

  // },
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
    function drop(array, n = 1) {
      var res = []
      for (let i = 0; i < array.length; i++) {
        if (i >= n) {
          res.push(array[i])
        }
      }
      return res
    }
    return drop(array.reverse(), n).reverse()
  },
  // dropRightWhile: function (array, predicate) {

  // },
  // dropWhile: function () {

  // },
  fill: function (array, value, start = 0, end = array.length) {
    for (let i = 0; i < array.length; i++) {
      if (i >= start && i < end) {
        array[i] = value
      }
    }
    return array
  },
  // findIndex: function (array, predicate) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (predicate(array[i])) {
  //       return i
  //     } else return -1
  //   }
  // },
  // findLastIndex: function (array, predicate) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (predicate(array[i])) {
  //       return array.length - i
  //     } else return -1
  //   }
  // },
  flatten: function (array) {
    return array.flat()
  },
  flattenDeep: function (array) {
    var res = []
  },
  flattenDepth: function (array, depth) {

  },
  fromPairs: function (array) {
    var res = {}
    for (let i = 0; i < array.length; i++) {
      const element = array[i]
      if (!(element in res)) {
        res[element[0]] = array[i][1]
      }
    }
    return res
  },
  head: function (array) {
    if (array.length == 0) {
      return undefined
    } else return array[0]
  },
  indexOf: function (array, value, index = 0) {
    if (index >= 0) {
      for (let i = index; i < array.length; i++) {
        if (array[i] == value) {
          return i
        }
      }
    } else {
      for (let j = array.length + index; j < array.length; j++) {
        if (array[j] == value) {
          return j
        }
      }
    }
    return -1
  },
  initial: function (array) {
    var res = []
    if (array.length == 0) {
      return []
    } else {
      for (let i = 0; i < array.length - 1; i++) {
        res.push(array[i])
      }
      return res
    }
  },
  intersection: function (...array) {
    return new Set(...array)
  },
  intersectionBy: function () {

  },
  intersectionWith: function () {

  },
  join: function (array, x) {
    var s = ''
    for (let index = 0; index < array.length; index++) {
      s += array[index] + `${x}`
    }
    return s.slice(0, s.length - 1)
  },
  last: function (array) {
    return array[array.length]
  },
  lastIndexOf: function (array, value, index = array.length - 1) {
    if (index >= 0) {
      for (let i = index; i >= 0; i--) {
        if (array[i] == value) {
          return i
        }
      }
      return -1
    }
  },
  nth: function (array, n) {
    if (n >= 0) {
      for (let i = 0; i < array.length; i++) {
        return array[n]
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        return array[array.length + n]
      }
    }
  },
  pull: function (array, ...value) {
    for (const iterator of value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == iterator) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },
  pullAll: function (array, array2) {
    for (const iterator of array2) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == iterator) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },
  pullAllBy: function () {

  },
  reverse: function (array) {
    var res = [];
    for (const iterator of array) {
      res.unshift(iterator)
    }
    return res
  },
  isUnderfined: function (value) {
    return value === undefined ? true : false
  },
  union:function (...array) {
    
  },
  sortedIndex:function (array,value) {
    for (let i = 0; i < array.length; i++) {
      if (value >= array[i] && value <=array[i+1]) {
        return i+1
      }
    }
  },
  uniq:function (array) {
    return new Set(array)
  },
  without: function (array, array2) {
    for (const iterator of array2) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == iterator) {
          array.splice(i,1)
        }
      }
    }
    return array
  }





























}
