# 作用域 this 闭包

### 作用域

```js
let a = 0;
function fn1() {
    let a1 = 100;
    function fn2() {
        let a2 = 200;
        function fn3() {
            let a3 = 300;
            return a + a1 + a2 + a3;
        }
        fn3();
    }
    fn2();
}
fn1();
```

以上代码明确的表示了作用域的范围和使用

作用域简单的说： 变量的合法使用范围。

《你不知道的 JavaScript》 对作用域的定义： 作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。

总结： 作用域是根据名称查找变量的一套规则

js 引擎在当前作用域中无法查找到某个变量时，会向嵌套的外层作用域继续查找，直到找到该变量

或者抵达最外层作用域（全局作用域）为止。

**作用域分为：** 全局作用域、 函数作用域、 块级作用域（ES6）

1. 全局作用域
   在全局作用域中的对象在代码的任何地方都可以访问，其生命周期伴随着页面的生命周期
   包含: window 上的属性， 最外层的函数，最外层定义的变量，未定义直接赋值的变量，js 规定的全局对象的属性

2. 函数作用域
   在函数内部定义的变量或者函数，并且定义的变量或者函数只能在函数内部被访问。在函数执行
   结束之后，函数内部定义的变量会被销毁。

3. 块级作用域
   在 ES6 出现了块的概念，新增了块级作用域和 let const 命令

## 作用域链

### 定义

作用域链可以理解成一组对象的列表，包含父级和自身的变量对象。通过作用域链访问父级里声明的变量或者函数

### 组成

> 作用域链由两部分组成： `[[scope]]属性` 和 `AO`

1. [[scope]]属性：指向父级变量对象和作用域链，也就是包含了父级的`[[scope]]`和 `AO`
2. AO：自身活动对象，也就是该执行上下文中的变量对象。

### 查找规则

js 引擎从当前的执行作用域开始查找变量，
如果找不到，继续一层一层向上级的作用域查找。
直到最外层的全局作用域

## 闭包

闭包是对作用域的特殊使用，A 函数在 B 函数外，可以拿到 B 函数内定义的变量值

### 定义

当一个函数能够访问和操作另一个函数作用域中的变量时，就形成了闭包

看一个示例：

```js
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}

var baz = foo();

baz(); // 2 这就是闭包的效果
```

在 JS 引擎中，foo() 执行后，通常 foo()整个内部作用域会被销毁，

JS 引擎内部垃圾回收机制来释放不使用的内存空间。

但是从上面代码看出，bar() 依然持有对 foo() 作用域的引用。

这个引用就叫做闭包。

### 闭包的两种表现形式

-   函数作为参数被传递
-   函数作为返回值被返回

看下面两个示例代码

```js
// 函数作为返回值
function create() {
    let a = 100;
    return function() {
        console.log(a);
    };
}

let fn = create();
let a = 200;
fn(); // a = ?
```

执行结果： `a = 200`

```js
function print(fn) {
    let a = 200;
    fn();
}

let a = 100;
function fn() {
    console.log(a);
}
print(fn); // a =?
```

执行结果： `a = 100`

> 得出结论: 自由变量的查找，是在函数定义的地方向上级作用域查找， 不是在执行的地方

### 闭包的应用场景

1. 创建私有变量和方法

```js
function createStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
    };
}
```

2. 回调函数： 定时器、DOM 事件、Ajax 请求.....

```js
function foo(time) {
    setTimeout(() => {
        console.log(time);
    }, time);
}

foo(1000);
```

### 闭包的优缺点

1. 优点：
   （1）可以重复使用变量， 不会造成变量污染
   （2） 可以用来定义私有属性和方法
2. 缺点：
   (1) 会产生不销毁的上下文，导致堆栈内存消耗
   (2) 会造成内存泄漏

思考： 闭包是怎么回收的？

### 经典的闭包问题

```js
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);
}
```

正常情况下，我们对这段代码行为的预期是分别输出数字 1~5，每秒一次，每次一个。
但实际上，这段代码在运行时会以每秒一次的频率输出五次 6。

解决方案：

1. 使用 let 声明变量 i
2. 使用 IIFE 声明并立即执行一个函数创建作用域

## this

this 的作用 可以在函数体内部获取当前的运行环境（上下文）

### this 应用场景

-   作为普通函数 默认绑定
-   作为对象方法调用 隐式绑定
-   使用 call apply bind 显示绑定
-   new 创建实例
-   箭头函数

> this 在各个场景中取什么值，是在函数执行的时候确定的，不是在函数定义的时候确定的

### 默认绑定

```js
function foo() {
    console.log(this.a);
}
var a = 2;
foo(); // 2
```

独立函数调用，此时应用 this 的默认绑定，指向全局对象.

如果使用严格模式（strict mode）,全局对象将无法使用默认绑定，this 会绑定到 undefined.

```js
function foo() {
    'use strict';
    console.log(this.a);
}
var a = 2;
foo(); // TypeError: this is undefined
```

### 隐式绑定 this 指向调用堆栈的上一级

思考下面的代码

```js
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo,
};
obj.foo(); // 2
```

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
因为调用 foo() 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的.

对象属性引用链中只有最顶层或者说是最后一层影响调用位置。看下面代码：

```js
function foo() {
    console.log(this.a);
}
var obj2 = {
    a: 30,
    foo: foo,
};
var obj1 = {
    a: 2,
    obj2: obj2,
};
obj1.obj2.foo(); // 30
```

### 显示绑定

通过 call, apply, bind 方式改变 this 指向。

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

apply() 方法调用一个具有给定的 this 值的函数，以及一个数组的形式提供参数

bind() 方法创建一个新的函数，在 bind() 被调用的时候，新函数的 this 被指定为 bind()
第一个参数，其余参数作为新函数的参数，供调用时使用

> 三者之间有什么区别？

1. call() 方法接收的是参数列表， apply() 方法接收的是一个参数数组
2. bind() 返回的是一个绑定的函数， call 和 apply 返回的是运行结果
3. 多次的 bind() 绑定无效，只会绑定到第一次调用的对象上
4. 对于箭头函数来说，显示绑定对它的 this 没有影响，只是传入参数

### new this 指向创建的实例对象

```js
function foo(a) {
    this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```

### 拓展 手写 call apply bind

#### call

基本用法：

`function.call(thisArg, arg1, arg2...)`

```js
function foo(val1, val2) {
    return this.a + this.b + val1 + val2;
}

const obj = {
    a: 1,
    b: 2,
};

foo.call(obj, 1, 2);
```

实现一个 call 函数

```js
Function.prototype.myCall = function(context, ...args) {
    // 获取第一个参数，构建对象（第一个参数是 null，undefined 指向window）
    context = context ? Object(context) : window;
    // 将对应函数传入该对象
    context.fn = this;
    // 获取参数并执行函数
    let result = context.fn(...args);
    // 消除副作用
    delete context.fn();
    // 返回结果
    return result;
};
```

实现一个 apply 函数

```js
Function.prototype.myApply = function(context, arr) {
    context = context ? Object(context) : window;
    context.fn = this;
    let result = arr ? context.fn(...arr) : context.fun();
    delete context.fn;
    return result;
};
```

手写 bind

```js
Function.prototype.myBind = function() {
    const _this = this;
    const args = Array.prototype.slice.call(arguments);

    const newThis = args.shift();

    return function() {
        return _this.apply(newThis, args.concat(Array.prototype.slice.call(arguments)));
    };
};
```

### 优先级

new > 显示绑定 > 隐式绑定 > 默认绑定
