Function.prototype.myApply = function (context, args) {
    context = context || window
    const fn = Symbol()
    context[fn] = this
    const result = Array.isArray(args) ? context[fn](...args) : context[fn]()
    delete context[fn]
    return result
}


function test(c, d) {
    console.log(this.a + c + d)
}

const obj = {
    a: 1
}

test.myApply(obj, [1, 2])