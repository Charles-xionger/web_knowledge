# 作用域-this-闭包

作用域是什么？

是一套规则，用来存储变量，和方便查询使用变量

作用域链 => 作用域的嵌套 可以比作一栋大楼， 从当前楼层（执行作用域）往上查找所需的变量，直到楼顶（全局变量），查找结束

### 作用域链

```js
let a = 'global';
console.log(a);

function course() {
    let b = 'zhuawa';
    console.log(b);

    session();
    function session() {
        let c = 'this';
        console.log(c);

        teacher();
        function teacher() {
            let d = 'yy';
            console.log(d);
        }
    }
}
course();
```

### this 上下文 context

`this 是在执行时动态读取上下文决定的，不是在定义时决定的`
简单说：
this 在各个场景中取什么值，是在函数执行时候确定的，不是在函数定义时候确定的

#### 函数直接调用 - this 指向 window

```js
function foo() {
    console.log('函数内部的this', this);
}

foo();
```

#### 隐式绑定 - this 指向调用堆栈的上一级

```js
function fn() {
    console.log('隐式绑定', this.a);
}

obj.fn = fn;
obj.fn();
```

#### 实战

```js
const foo = {
    bar: 10,
    fn: function() {
        console.log(this.bar); // undefined
        console.log(this); // window
    },
};

let fn1 = foo.fn;
fn1();

// 追问，如何改变this指向

const o1 = {
    text: 'o1',
    fn: function() {
        return this.text;
    },
};

const o2 = {
    text: 'o2',
    fn: function() {
        return o1.fn();
    },
};

const o3 = {
    text: 'o3',
    fn: function() {
        let fn = o1.fn();
        return fn();
    },
};

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined
```

1. 在执行函数时，如果函数被上一级所调用，那么上下文即指向上一级
2. 否则为全局孤立，指向 window

#### 追问： 现在我需要将 console.log(o2.fn()) 结果是 o2

```js
// 1. 人为干涉，改变this- bind/call/apply

// 2. 不允许改变this

const o1 = {
    text: 'o1',
    fn: function() {
        return this.text;
    },
};

const o2 = {
    text: 'o2',
    fn: o1.fn(),
};

// this指向最后调用它的对象，在fn执行的时候,函数挂载到o2对象上
```

#### 显示绑定 （bind | apply | call）

```js
function foo() {
    console.log('函数内部的this', this);
}
foo();

foo.call({ a: 1 });
foo.apply({ a: 1 });

const bindFoo = foo.bind({ a: 1 });
bindFoo();
```

#### 追问： call、apply、 bind 的区别？

1. 传参不同
2. 直接返回不同，最终执行返回相同

#### new - this 指向的是 new 之后的实例

```js
class Course {
    constructor(name) {
        this.name = name;
        console.log('构造函数中的this', this);
    }
    test() {
        console.log('类方法中的this', this);
    }
}
const course = new Course('this');
course.test();
```

#### 追问: 异步方法中 this 有什么区别？

```js
class Course {
    constructor(name) {
        this.name = name;
        console.log('构造函数中的this', this);
    }
    test() {
        console.log('类方法中的this', this);
    }

    asyncTest() {
        console.log('类方法中的this', this);
        setTimeout(function() {
            console.log('异步方法中的this', this); // window
        }, 1000);
    }
}
const course = new Course('this');
course.test();
```

-   1.执行 setTimeout 时，传入匿名 function 执行，效果和全局执行函数效果相同
-   2.再追问：如何解决：把 function 改为独立上下文的箭头函数即可

#### bind 原理 /手写 bind

-   1.bind 在哪里

```js
function sum(a, b, c) {
    console.log(a, b, c, this);
    return a + b + c;
}
// 1. sum.bind - 在哪里？ => Function.prototype

Function.prototype.newBind = function() {
    // 2. bind 是什么？
    // a.返回一个函数 b.返回原函数执行结果

    const _this = this;
    // 伪数组转为数组
    const args = Array.prototype.slice.call(arguments);
    // args 特点：第一项-newThis 第二项~最后一项 -函数的传参
    const newThis = args.shift();
    return function() {
        return _this.apply(newThis, args);
    };
};
```

-   2. apply 应用 - 多传参 数组化

```js
Math.max(2, 4, 5, 6);
const arr = [2, 4, 5, 6];

let max = Math.max.apply(this.arr);
```

#### 优先级

```js
function fn() {
    console.log(this);
}

const obj = {
    fn,
};

obj.fn(); // obj
// 显示 > 隐式
obj.fn.bind(111)(); // 111

function foo(a) {
    this.a = a;
}

const obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); // 2

let baz = new bar(3);
// new > 显示
console.log(obj1.a); // 2
console.log(baz.a); // 3
```

#### 学完作用域和上下文， 如何突破作用域的束缚

#### 闭包 closures : 一个函数和它周围状态的引用捆绑在一起的组合

#### 1. 函数作为返回值的场景

```js
function mail() {
    let content = '信';
    return function() {
        console.log(content);
    };
}

const envelope = mail();

envelope();
```

-   在函数外部获取到函数作用域内的变量值

#### 2. 函数作为参数

```js
function envelop(fn) {
    let content = 1;
    fn();
}

function mail(
  console.log(content)
)

envelop(mail)
```

#### 函数嵌套

```js
let counter = 0;

function outerFn() {
    function innerFn() {
        counter++;
        console.log(counter);
    }
    return innerFn;
}
```

#### 追问：事件处理（异步执行） 闭包

```js
let lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        console.log(i);
    };
}

// 打印结果： 5 5 5 5 5
```

#### 如何解决？ 立即执行函数

```js
let lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
    (function(i) {
        lis[i].onclick = function() {
            console.log(i);
        };

        // setTimeout(function() {
        // console.log(i)
        // },100)
        })
    })(i);
}
```

#### 追问？

#### 立即执行嵌套

```js
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // 0
    })(1);
})(0);
// 遵循作用域链的向上查找
```

#### 立即执行遇上块级作用域

```js
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count); // 1
    }
    console.log(count); // 0
})();
```

#### 拆分执行多个闭包

```js
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    let message = `count is ${count}`;

    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment(); // 0
increment(); // 1
increment(); // 2
log(); // count is 0
```

#### 实际使用场景：实现私有变量

```js
function createStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item);
        },
    };
}
// 此时不仅可以操作栈，还可以获取栈本身

const stack = {
    items: [],
    push: function() {},
};

// 改造 内部私有变量
function creatStack() {
    const items = [];
    return {
        push(item) {
            items.push(item);
        },
    };
}
```
