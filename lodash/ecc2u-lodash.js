//lodash 实践

var ecc2u = {
  chunk: function (array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
      array.slice(i * size, (i + 1) * size)
    )
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
  difference: function (array, ...array2) {
    return array.filter(t => { return !(flattenDeep(array2).includes(t)) })
    function flattenDeep(array) {
      return array.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur)
      }, [])
    }
  },
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
    if (array.length < n) {
      return []
    } else {
      array.reverse().splice(0, n)
      return array.reverse()
    }
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
    return array.reduce((pre, cur) => pre.concat(cur), [])
  },
  flattenDeep: function (array) {
    return array.reduce((pre, cur) => {
      //递归版本
      return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur)
    }, [])
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
    return array.reduce((accumulator, currentValue) =>
      accumulator.filter(item => currentValue.includes(item)))
  },
  // intersectionBy: function () {

  // },
  // intersectionWith: function () {

  // },
  join: function (array, x) {
    var s = ''
    for (let index = 0; index < array.length; index++) {
      s += array[index] + `${x}`
    }
    return s.slice(0, s.length - 1)
  },
  last: function (array) {
    return array[array.length - 1]
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
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
  union: function (...array) {
    return [...new Set(array.reduce((pre, cur) => pre.concat(cur), []))]
  },
  sortedIndex: function (array, value) {
    for (let i = 0; i < array.length; i++) {
      if (value >= array[i] && value <= array[i + 1]) {
        return i + 1
      }
    }
  },
  sortedIndexOf: function (array, value) {
    return array.sort((a, b) => a - b).indexOf(value)
  },
  uniq: function (array) {
    return [...new Set(array)]
  },
  without: function (array, array2) {
    for (const iterator of array2) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == iterator) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },
  groupBy: function (collection, iteratee) {
    let map = {}

    if (typeof (iteratee) === 'string') {
      var f = (item) => item[iteratee]
    } else if (typeof (iteratee) === 'function') {
      var f = iteratee
    }

    for (let i = 0; i < collection.length; i++) {
      let item = collection[i]
      let key = f(item)
      //键在对象中
      if (key in map) {
        map[key].push(item)
      } else {
        //键不在对象中 添加键
        map[key] = [item]
      }
    }

    return map
  },
  size: function (collection) {
    if (Array.isArray(collection)) {
      return collection.length
    } else if (typeof (collection) == 'string') {
      return collection.length
    } else if (typeof (collection) == 'object') {
      return Object.keys(collection).length
    }
  },
  xor: function (...array) {
    var newArray = array.reduce((pre, cur) => pre.concat(cur))
    return newArray.filter(t => {
      var target = sameInArray(newArray)
      return !target.includes(t)
    })
    function sameInArray(array) {
      var obj = {}
      var arr = []
      array.forEach(function (item) {
        return obj[item] = obj[item] ? obj[item] + 1 : 1
      })
      for (const key in obj) {
        if (obj[key] > 1) {
          arr.push(Number(key))
        }
      }
      return arr
    }
  },
  size: function (collection) {
    if (Array.isArray(collection)) {
      return collection.length
    } else if (typeof (collection) == 'string') {
      return collection.length
    } else if (typeof (collection) == 'object') {
      //返回Object.kenys键组成的数组 .length 数组的长度
      return Object.keys(collection).length
    }
  },
  sample: function (collection) {
    if (Array.isArray(collection)) {
      return collection[parseInt(Math.random() * collection.length)]
    } else {
      var keys = Object.keys(collection)
      return collection[keys[keys.length * Math.random() << 0]]
    }
  },
  toPairs: function (object) {
    var item = []
    for (const key in object) {
      item.push(key, object[key])
    }
    function chunk(array, size) {
      //像上取整
      return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
        array.slice(i * size, (i + 1) * size)
      );
    }
    return chunk(item, 2)
  },
  isArguments: function (value) {
    return typeof Object.getPrototypeOf(value) === Object.prototype
  },
  isArray: function (value) {
    return typeof Array.isArray(value)
  },
  isBoolean: function (value) {
    return typeof value == 'boolean'
  },
  isDate: function (value) {
    return value instanceof Date
  },
  isUnderfined: function (value) {
    return value == undefined
  },
  isString: function (value) {
    return typeof value == 'string'
  },
  toArray: function (value) {
    if (typeof value == 'String') {
      return value.split()
    }
  },
  repeat: function (string, n) {
    var t = ''
    if (n == 0) {
      return ''
    } else {
      while (n > 0) {
        t = t.concat(string)
        n--
      }
      return t
    }
  },
  once: function (func) {
    var res = 0
    var time = 0
    return function (...v) {
      if (time == 0) {
        time++
        return res = func(...v)
      } else return res
    }
  },
 






























}
