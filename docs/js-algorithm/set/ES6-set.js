// 前端与集合： 使用 ES6 的 Set

// Set 操作：

// 使用Set 对象 ：new、add、delete、has、size

// 迭代Set：多种迭代方法、Set 与Array 互转、 求交集/差集

let mySet = new Set();

// 添加元素 add
mySet.add(1); // 字符串
mySet.add(5);
mySet.add('some text'); // 字符串

let o = { a: 1, b: 2 };
mySet.add(o) // 对象
mySet.add({ a: 1, b: 2 });

// 查找 has
let result = mySet.has(o)

// 删除元素
mySet.delete(5)


// 迭代
// 1. for ... of ... mySet
for (let item of mySet) {
  console.log(item)
}
// 2. mySet.keys()
for (let item of mySet.keys()) console.log(item);

// 3. mySet.values()
for (let item of mySet.values()) console.log(item);

// 4. mySey.entries()
for (let [key, value] of mySet.entries()) console.log(key, value);

// set 和 arry 互转

// 1. set => array

const myArry = [...mySet]

const myArry1 = Array.from(mySet)

// 2. array => set

const mySet2 = new Set([1, 2, 3])

// 求交集

const intersection = new Set([...mySet].filter(i => mySet2.has(i)))

// 求差集
const difference = new Set([...myset].filter(i => !mySet2.has(i)))