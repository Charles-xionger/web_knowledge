Function.prototype.mybind = function () {
    const _this = this
    const args = Array.prototype.slice.call(arguments)
    const newThis = args.shift()

    return function F(...args1) {
        if (this instanceof F) {
            return new _this(...args, ...args1)
        }
        return _this.apply(newThis, args.concat(args1))
    }
}
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function test(c, d) {
    console.log(this.a + c + d)
}

const obj = {
}

const Res = Point.mybind(obj, 0)

const res1 = new Res(5)

console.log(res1 instanceof Point)