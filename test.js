
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


///// 调用
console.log(drop([1,2,3],2))
