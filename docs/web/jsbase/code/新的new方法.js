function myNew(Fn, ...args) {
    // 创建一个新对象
    const result = {};
    // __proto__ 指向 constructor.prototype
    if (Fn.prototype !== null) {
        Object.setPrototypeOf(result, Fn.prototype);
    }
    // 将执行上下文（this）绑定到新创建的对象中
    const returnResult = Fn.apply(result, args);

    // 如果构造函数有返回值（对象或函数），那么返回值取代第一步创建的新对象
    if (
        (typeof retrunResult === 'object' || typeof returnResult === 'function') &&
        returnResult !== null
    ) {
        return returnResult;
    }
    return result;
}


function Fun() {
    this.a = 10;
    this.b = 20;
}

Fun.prototype = {
    method: () => {
        console.log('原型上的method被访问')
    }
}
const fun1 = new Fun();
console.log(fun1); // { a: 10, b: 20 }
const fun2 = myNew(Fun);
console.log(fun2); // { a: 10, b: 20 }

