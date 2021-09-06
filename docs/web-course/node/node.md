# node.js 基础

## 1.1 Buffer

### 背景知识

1. ArrayBuffer 可以理解为一块内存

通用的、固定长度的原始二进制的数据缓冲区

1.1 ArrayBuffer 能够直接操作吗？

答： 不能直接操作。使用： 通过类型数组对象来操作（TypedArray）. 将缓冲区中的数据表示为特定的格式

2.  Unit8Array
    表示一个 8 位无符号整型数组，创建的时候内容被初始化为 0

字节 byte = 8bit
js Number 64 位 => 8byte

3. ArrayBuffer 和 TypeArray 的关系是什么？

TypeArray: Unit8Array, Int32Array, Int16Array

ArrayBuffer: 本身是一个 0 和 1 存放在一行里的一个集合。

3.1 可以用一个 Int8 的确定类型数组来分离存放 8 位的二进制字节
3.2 无符号的 Int16 存放 16 位的二进制字节

4. 总结
   ArrayBuffer 扮演一个原生的内存角色

## NodeJS Buffer

[Buffer-nodejs](http://nodejs.cn/api/buffer.html#buffer_static_method_buffer_alloc_size_fill_encoding)

在 node 中用 Buffer 的实例实现了 Unit8Array 的 api
Buffer 的实例类似于整型数组，区别在于 Buffer 的大小是固定的，在创建的时候就确定了

```js
// 创建一个长度为10 填充为0的Buffer
const buf1 = Buffer.alloc(10); // 此处的 Buffer 为全局对象，可以直接调用
console.log(buf1);

// 创建一个长度为10 填充为1的Buffer
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// allocUnsafe 比 alloc 更快，但是 allocUnsafe 创建的缓存区里可能存在旧数据
const buf3 = Buffer.allocUnsafe(10); // fill write重写
console.log(buf3);
```

### Tips

1. 当调用 Buffer.allocUnsafe() 时，被分配的内存段是未初始化的
   内存的分配非常快，但是分配的内存段可能包含潜在的旧数据
   具有明显的性能优势，但是如果使用不当，会给程序引入安全漏洞

## 1.2 Stream

## 1.3 Events

## 2. 全局对象解析

## 3. node.js 事件循环模型(重点学习)

面试考察： 浏览器的事件循环是怎样的？ => 你了解 node 的事件循环吗？ 两者有什么区别？
