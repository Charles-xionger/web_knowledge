# 排序和搜索

排序： 把某个乱序的数组变成升序或者降序的数组

搜索： 找出数组中某个元素的下标

## JS 中的排序和搜索

-   JS 中的排序： 数组的 sort 方法 [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
-   JS 中的搜索： 数组的 indexOf 方法 [Array.prototype.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## 排序算法

[动画演示](https://visualgo.net/zh/sorting)

-   冒泡排序
-   选择排序
-   插入排序
-   归并排序
-   快速排序

## 搜索算法

-   顺序搜索
-   二分搜索

## 冒泡排序（面试中容易考到）

### 思路

-   比较所有的相邻元素，如果第一个比第二个大，则交换他们
-   一轮结束，数组最后一个数是最大的
-   执行 n-1 轮， 就可以完成排序

#### 代码

```js
Array.prototype.bubbleSort = function() {
    // console.log(this) this => arr
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            // console.log(this[j], this[j + 1])

            if (this[j] > this[j + 1]) {
                let temp = this[j + 1];
                this[j + 1] = this[j];
                this[j] = temp;
            }
        }
    }
};

const arr = [5, 4, 3, 2, 1];

arr.bubbleSort();

// 时间复杂度 O(n^2) 两个嵌套循环 性能不好
```

### 选择排序（工作中不会使用，面试容易考到）

-   选择数组中第一个数作为最小值， 与之后的每一位数进行比较
-   与之后最小数做交换，此时第一位就是最小数
-   依次类推，从第二位数,第三位。。。。开始比较，交换，逐渐缩小区间范围

#### 代码

```js
Array.prototype.selectionSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] < this[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }
};
const arr = [5, 4, 3, 2, 1];

arr.selectionSort();
// 时间复杂度 O(n^2) 两个嵌套循环 性能不好
```

## 插入排序

### 思路

-   从第二个数开始往前比
-   比它大的就往后排
-   以此类推进行到最后一个数

### 步骤

1. 临时变量存储第二个数
2. 往前比， 创建 while 循环
3. 往后移 赋值交换
4. 创建循环 （1-2-3）步骤

#### 示例代码

```js
Array.prototype.insertionSort = function() {
    for (let i = 1; i < this.length; i++) {
        // 4
        const temp = this[i]; // 1
        let j = i;
        while (j > 0) {
            // 2
            if (this[j - 1] > temp) {
                // 3
                this[j] = this[j - 1];
            } else {
                break;
            }
            j -= 1;
        }

        this[j] = temp;
    }
};

const arr = [5, 4, 3, 2, 1];

arr.insertionSort();

// 嵌套循环 O(n^2)
```

## 归并排序 (分 和 合)

// 时间复杂度 O（n \* log n）

分： 把数组劈成两半，再次递归地对数组进行“分”操作，直到分成一个个单独地数
合： 把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组

### 如何合并两个有序数组

1. 新建一个空数组 res, 用于存放最终排序后地数组
2. 比较两个有序数组地头部，较小者出队并推入 res 中
3. 如果两个数组还有值，重复第二步

#### 示例代码

```js
Array.prototype.mergeSort = function() {
    // 1. 分 递归拆分数组
    const rec = arr => {
        if (arr.length === 1) {
            return arr;
        }
        // 获取数组的中间下标
        const mid = Math.floor(arr.length / 2);
        // 左
        const left = arr.slice(0, mid);
        // 右
        const right = arr.slice(mid, arr.length);
        // 递归拆分
        const orderLeft = rec(left);
        const orderRight = rec(right);

        // 合并数组
        const res = [];
        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if (orderLeft.length) {
                res.push(orderLeft.shift());
            } else if (orderRight.length) {
                res.push(orderRight.shift());
            }
        }
        return res;
    };
    const res = rec(this);
    // 拷贝数组
    res.forEach((num, index) => {
        this[index] = num;
    });
};

const arr = [5, 4, 3, 2, 1];

arr.mergeSort();

// 归并排序的时间复杂度
// 分的时间复杂度 是 O(logN)
// 合的时间复杂度是 O(N)
// 时间复杂度O(N * log N)
```

## 快速排序

### 思路

-   分区： 从数组中任意选择一个"基准”,所以比基准小的元素放在基准前面，比基准大的元素放在基准后面
-   递归：递归地对基准前后地子数组进行分区

```js
Array.prototype.quickSort = function() {
    // 递归
    const rec = arr => {
        if (arr.length === 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        // 返回值
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    });
};
const arr = [2, 4, 5, 3, 1];

arr.quickSort();

// 递归的时间复杂度 O(logN)
// 分区操作的时间复杂度 O(n)
// 时间复杂度：O(n * logN)
```
