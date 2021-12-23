console.log(typeof '12') // string
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof Symbol()) // symbol

// 对象 引用类型
console.log(typeof new Date())
console.log(typeof {})
console.log(typeof [])
console.log(typeof null)

console.log(typeof function () { })


/**
 * typeof 可以判断基础值类型， string number boolean symbol undefined 对象和函数 object function
 * 缺点：无法进一步判断引用类型
 * 机器码的低位1-3 存储其类型信息
 * 000 对象
 * 001 整数
 * 010 浮点数
 * 100 字符串
 * 110 布尔值
 *
 * typeof 是通过机器码判断类型， null 所有机器码均为0 所以 typeof null => object
 * undefined 用 -2^30 整数来表示
 */

const arr = [1, 2]

console.log(arr instanceof Object) // true

const proto1 = Object.getPrototypeOf(arr) // arr.__proto__

console.log('proto1', proto1)

const proto2 = Object.getPrototypeOf(proto1) // Array.__proto__
console.log('proto2', proto2)

console.log(proto2 === Object.prototype)
console.log(Object.prototype)
console.log(Array.prototype.__proto__)

// 自己写一个 instanceof

function myInstanceof(left, right) {
    let leftVal = Object.getPrototypeOf(left)
    const rightVal = Object.getPrototypeOf(right)

    while (leftVal !== null) {
        if (leftVal === rightVal) {
            return true
        }
        leftVal = Object.getPrototypeOf(leftVal)
    }

    return false
}


/**
 *  constructor
 *  原型、构造函数、实例之间的关系
 *  在定义一个函数（构造函数）时候，js引擎会为其添加 prototype 原型
 *  原型上有其对应的 constructor 属性指向构造函数，构造函数生成的实例可以访问对应原型上的constructor属性
 */

const val = 1;
console.log(val.constructor); // [Function: Number]
const val1 = 'abc'
console.log(val1.constructor); // [Function: String]
const val2 = true
console.log(val2.constructor); // [Function: Boolean]

/**
 * 存在缺点：
 * 1. null 和 undefined 没有 constructor 属性，需要其他方式来判断
 * 2. 函数的 constructor 是不稳定，重写原型后，原有的constructor引用会丢失，默认绑定到Object上
 */


const str = Object.prototype.toString.call('111') // [object String]
// 利用 上面方法构建一个新的鉴别函数
function type(target) {
    const ret = typeof (target)
    const template = {
        "[object Number]": "array",
        "[object Object]": "object",
        "[object Number]": "number",
        "[object Boolean]": "boolean",
        "[object String]": 'string'
    }

    if (target === null) {
        return 'null'
    }
    else if (ret == "object") {
        const str = Object.prototype.toString.call(target)
        return template[str]
    } else {
        return ret
    }

}

console.log(type({})); // object
console.log(type(123)); // number
console.log(type('123')); // string