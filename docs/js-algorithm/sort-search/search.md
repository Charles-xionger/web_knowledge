# 搜索算法

## 顺序搜索

### 思路

1.  遍历数组
2.  找到跟目标值相等的元素，就返回它的下标
3.  遍历结束，没有找到目标值就返回 -1

#### 代码实现

```js
Array.prototype.sequentialSearch = function(item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(3);
console.log(res);

// 遍历数组是一个循环操作
// 时间复杂度 O(n)
```

## 二分搜索（binarySearch）

-   前提在有序数组 搜索，如果数组是乱序需要排序

## 思路

1. 从数组地中间元素开始，如果中间元素正好是目标值，则搜索结束
2. 如果目标值大于或者小于中间元素，则在大于或者小于中间元素的那一半数组中搜索
3. 如果没有找到目标值就返回 -1

```js
Array.prototype.binarySearch = function(item) {
    let min_key = 0;
    let max_key = this.length - 1;

    while (min_key <= max_key) {
        const mid = Math.floor((min_key + max_key) / 2); // 中间下标
        const element = this[mid];
        if (element < item) {
            min_key = mid + 1;
        } else if (element > item) {
            max_key = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(5);

console.log(res);

// 时间复杂度
// 每一次比较都使搜索范围缩小一半
// 时间复杂度： O(logN)
```

## Leetcode 题目

[21.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

### 思路

-   新建一个新链表，作为返回结果.
-   用指针遍历两个有序链表，并比较两个链表的当前节点.
-   较小者先接入新链表，并将指针后移一步.
-   链表遍历结束，返回新链表.

#### 374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

二分查找

-   从数组的中间元素开始，如果中间元素正好是目标值，则搜索过程结束.
-   如果目标值大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找。

```js
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			                1 if num is higher than the guess number
 *                      otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const rec = (low, high) => {
        if (low > high) {
            return;
        }
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === 1) {
            return rec(mid + 1, high);
        } else {
            return rec(1, mid - 1);
        }
    };
    return rec(1, n);
};
```
