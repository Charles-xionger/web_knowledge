const deepClone = function (source) {
    // 边界条件 source 不是对象或者不存在
    if (typeof source !== 'object' && source === null) {
        return source
    }
    // 判断是不是数组？
    const result = Array.isArray(source) ? [] : {}

    // // 遍历 source 内部
    // for (let key in source) {
    //     //  hasOwnProperty() 判断是否是自身的属性
    //     if (source.hasOwnProperty(key)) {
    //         result[key] = deepClone(source[key])
    //     }
    // }

    // 枚举对象的自身属性的键值对数组
    for (let [key, value] of Object.entries(source)) {
        // 此处应该去除一些内置对象，根据需要去除，l例如去除了RegExp对象
        if (typeof value === 'object' && value !== null && !(value instanceof RegExp)) {
            result[key] = deepClone(value)
        } else {
            result[key] = value
        }
    }
    return result
}


const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}


const obj3 = deepClone(obj1)

console.log(obj3)


// 递归的方式 存在爆栈的风险