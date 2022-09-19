
///// 函数
function drop(array, n = 1) {
  var res = []
  for (let i = 0; i < array.length; i++) {
    if (i >= n) {
      res.push(array[i])
    }
  }
  return res
}

function lastIndexOf(array, value, index = array.length - 1) {
  if (index >= 0) {
    for (let i = index; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
}

function sortedIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value >= array[i] && value <= array[i + 1]) {
      return i + 1
    }
  }
}

function uniq(array) {
  return new Set(array)
}
function unzip(array) {
  var res = [];
  for (const iterator of array) {
    console.log(iterator)
    for (let i = 0; i < iterator.length; i++) {
      res.push(iterator[i])

    }
  }
  return res

}

function without(array, ...array2) {
  var res = []
  for (let i = 0; i < array.length; i++) {
    if (array2.indexOf(array[i] == -1)) {
      res.push(array[i])
    }
  }
  return res
}
function last(array) {
  return array[array.length - 1]
}
function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else if (typeof (collection) == 'string') {
    return collection.length
  } else if (typeof (collection) == 'object') {
    //返回Object.kenys键组成的数组 .length 数组的长度
    return Object.keys(collection).length
  }
}
function intersection(...array) {
  return array.reduce((accumulator, currentValue) =>
    accumulator.filter(item => currentValue.includes(item)))
}
function chunk(array, size) {
  //像上取整
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, (i + 1) * size)
  );
}
function flatten(array) {
  return array.reduce((pre, cur) => pre.concat(cur), [])
}

function flattenDeep(array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur)
  }, [])
}

function flattenDepth(array, depth) {
  var res = [];
  array.forEach(element => {
    if (Array.isArray(element)) {

    }
  });
  return res
}

function difference(array, ...array2) {
  return array.filter(t => { return !(flattenDeep(array2).includes(t)) })
  function flattenDeep(array) {
    return array.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur)
    }, [])
  }
}

function dropRight(array, n = 1) {
  if (array.length < n) {
    return []
  } else {
    array.reverse().splice(0, n)
    return array.reverse()
  }
}

function sortedIndexOf(array, value) {
  return array.sort((a, b) => a - b).indexOf(value)
}

function union(...array) {
  return new Set(array.reduce((pre, cur) => pre.concat(cur), []))
}

function uniq(array) {
  return [...new Set(array)]
}

function xor(...array) {
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
}







var s = [['fred', 30, true], ['barney', 40, false]]
///// 调用
console.log(flattenDeep([1, [2, [3, [4]], 5]]))
console.log(xor([2, 1], [2, 3,4,4]))
