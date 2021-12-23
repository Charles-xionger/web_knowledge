Array.prototype.mergeSort = function () {
  // 1. 分 递归拆分数组
  const rec = (arr) => {
    if (arr.length === 1) { return arr; }
    // 获取数组的中间下标 
    const mid = Math.floor(arr.length / 2);
    // 左
    const left = arr.slice(0, mid)
    // 右
    const right = arr.slice(mid, arr.length)
    // 递归拆分
    const orderLeft = rec(left)
    const orderRight = rec(right)

    // 合并数组
    const res = []
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) {
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res;
  }
  const res = rec(this)
  // 拷贝数组
  res.forEach((num, index) => {
    this[index] = num
  })

}


const arr = [5, 4, 3, 2, 1]

arr.mergeSort()

console.log(arr)