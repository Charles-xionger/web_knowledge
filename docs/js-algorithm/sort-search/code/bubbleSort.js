Array.prototype.bubbleSort = function () {
  // console.log(this) this => arr
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      // console.log(this[j], this[j + 1])

      if (this[j] > this[j + 1]) {
        let temp = this[j + 1]
        this[j + 1] = this[j]
        this[j] = temp
      }
    }
  }

}

const arr = [5, 4, 3, 2, 1]

arr.bubbleSort()

// 时间复杂度 O(n^2) 两个嵌套循环 性能不好