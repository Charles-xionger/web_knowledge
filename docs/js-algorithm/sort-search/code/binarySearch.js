Array.prototype.binarySearch = function (item) {
  let min_key = 0
  let max_key = this.length - 1

  while (min_key <= max_key) {
    const mid = Math.floor((min_key + max_key) / 2); // 中间下标
    const element = this[mid]
    if (element < item) {
      min_key = mid + 1
    } else if (element > item) {
      max_key = mid - 1
    } else {
      return mid
    }
  }

  return -1
}

const res = [1, 2, 3, 4, 5].binarySearch(5)

console.log(res)
