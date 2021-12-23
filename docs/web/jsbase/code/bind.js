Function.prototype.myBind = function () {
  const _this = this;
  const args = Array.prototype.slice.call(arguments);

  const newThis = args.shift();

  return function () {
    return _this.apply(newThis, args.concat(Array.prototype.slice.call(arguments)));
  };
};

function test (...args) {
  console.log(this.a, args)
}

const result = test.myBind({
  a: 10
}, 1, 2, 3, 4)(6, 7)

