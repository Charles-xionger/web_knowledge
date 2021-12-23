# 变量类型和计算

#### 题目

1. typeof 能判断哪些类型？
2. 何时使用 === 何时使用 ==
3. 值类型和引用类型的区别
4. 手写深拷贝

#### 知识点

变量类型： 值类型和引用类型; typeof 运算符; 深拷贝

### 值类型和引用类型

### typeof 运算符

两种使用方式：（1） typeof(表达式); (2) typeof 变量名; 返回值是一个字符串，用来说明变量的数据类型

可以用此判断 number, string, boolean, object, function , undefined, symbol

#### 原理进阶

typeof 方法存在局限性， 对于对象、数组、null 返回的值是 Object。
比如 typeof(window), typeof(document), typeof(null) 返回的值都是 Object

**原理：**
js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息

1. 000 ：对象；
2. 010 ：浮点数；
3. 100 ：字符串；
4. 110 ：布尔值；
5. 1 ：整数；
6. 特例：
   （1） null 所有机器码均为 0
   （2） undefined ：用 −2^30 整数来表示

`typeof 就是通过机器码判断类型，由于null的所有机器码均为0，该机器码和对象一样，因此直 接被当作对象来看待，所以通过typeof 就不能够判断区分对象还有null 了。`

**总结**
`typeof 运算符`

1. 识别所有的值类型
2. 识别函数
3. 判断是否是引用类型（不可以再细分）

## 变量计算-类型转换

在以下三种情况会发生类型转换的情况

-   字符串拼接
-   "=="
-   if 语句和逻辑运算

示例代码

```js
// 字符串拼接

const a = 100 + 10; // 110
const b = 100 + '10'; // '10010'
const c = true + '10'; // 'true10'

// 将变量转换为字符类型最简单方法 加一个空字符串

// == 运算符
100 == '100'; // true
0 == ''; // true
0 == 'false'; // true
false == ''; // true
null == undefined; // true

// 在日常使用中， 除了 == null 之外，其他都一律使用 === 例如以下代码
const obj = { x: 100 };
if (obj.a == null) {
}

// 相当于
// if(obj.a === null || obj.a === undefined) {}
```

### if 语句 示例代码

先了解 truly 和 falsely 变量， 经过两次非运算后的结果为 true 和 false

-   truly 变量： !!a === true
-   false 变量： !!a === false

```js
// 以下是 falsely 变量。除此之外都是 truly 变量
!!0 === false;
!!NaN === false;
!!'' === false;
!!null === false;
!!undefined === false;
!!false === false;
```

### 逻辑判断

```js
console.log(10 && 0); // 0
console.log('' || 'ac2'); // 'ac2'
console.log(window.abc); // false
```

### 深拷贝

#### 乞丐版

最简单的深拷贝方式，利用 JSON.stringify()和 JSON.parse()，

但是该方式存在很多问题的：

1. 不能正确处理正则表达式，其会变为空对象；
2. 不能正确处理函数，其变为 undefined；
3. 不能正常输出值为 undefined 的内容。

```js
function deepClone(source) {
    return JSON.parse(JSON.stringify(source));
}
```

#### 浅拷贝+递归

```js
const deepClone = function(source) {
    // 1.判断传入参数不是对象或者数组 则返回
    if (typeof source !== 'object' || source == null) {
        return source;
    }

    // 2.初始化结果 判断对象或数组
    const target = Array.isArray(source) ? [] : {};
    // // 3.对参数进行处理
    // for (let key in source) {
    //     // 保证 key 不是原型的属性
    //     if (source.hasOwnProperty(key)) {
    //         // 递归调用 ！！
    //         result[key] = deepClone(source[key]);
    //     }
    // }

    // 3. 对source 进行遍历 优化
    // Object.entries() 枚举对象的自身属性的键值对数组
    for (let [key, value] of Object.entries(source)) {
        // 此处应该去除一些内置对象，根据需要去除，例如去除了RegExp对象
        if (typeof value === 'object' && value !== null && !(value instanceof RegExp)) {
            result[key] = deepClone(value);
        } else {
            result[key] = value;
        }
    }
    return result;
};
```

#### 非递归版 ，利用栈

递归版存在爆栈的风险，利用迭代的方式来实现

```js
function cloneDeep(source) {
    if (!(typeof source === 'object' && source !== null)) {
        return source;
    }
    const root = Array.isArray(source) ? [] : {};
    // 定义一个栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: source,
        },
    ];
    while (loopList.length > 0) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;
        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = Array.isArray(data) ? [] : {};
        }
        for (let [childKey, value] of Object.entries(data)) {
            if (typeof value === 'object' && value !== null && !(value instanceof RegExp)) {
                loopList.push({
                    parent: res,
                    key: childKey,
                    data: value,
                });
            } else {
                res[childKey] = value;
            }
        }
    }
    return root;
}
```

[`Object.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

[`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) 用于确定传递的值是否是一个 Array。 `Array.isArray(obj)`
