## 什么是 Promise

Promise 是异步编程的一种解决方案，解决回调地狱（嵌套调用改为链式调用）

## 优缺点（是为了解决什么问题？回调地狱， 同时存在什么问题）

优点： 解决回调地狱， 将回调函数的嵌套改为链式调用，使用 then 方法后，异步任务的执行看起来更加直观
缺点：Promise 最大问题：代码冗余。原本的任务都需要被 Promise 包装一下。一眼看过去一堆 then，语义不清楚

## Promise 对象特点

1. 对象的状态不受外界影响。Promise 对象代表一个异步操作。三种状态，pending(进行中)，fulfilled(成功)， rejected(失败)。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变状态。
2. 一旦状态改变，就不会再变。pending => fulfilled, pending => rejected

### Promise 对象三种状态，状态如何变化的

## Promise/A+ 规范

## 其他方法

### 静态方法

-   Promise.resolve()
-   Promise.reject()
-   Promise.all()
-   Promise.race()

功能，以及如何实现的？

### 实例方法

-   Promise.prototype.catch()
-   Promise.prototype.finally()
