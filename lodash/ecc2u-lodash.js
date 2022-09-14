//lodash 实践

var ecc2u = {
  chunk: function (array, size) {

  },
  compact: function (array) {
    var res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== false && array[i] !== 0 && array[i] !== null && array[i] !== "") {
        res.push(array[i])
      }
    }
    return res
  },
  difference: function (array, array2) {
    var res = [];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element !== array2[index]) {
        res.push(element)
      }
    }
    return res
  },
  differenceBy: function () {
    var res = [];

    return res
  },
  differenceWith: function () {

  },
  drop: function () {

  },
  dropRight: function () {

  },





























}
