Function.prototype.myApply = function (context, arr) {
  context = context ? Object(context) : window;
  context.fn = this;
  let result = arr ? context.fn(...arr) : context.fn();
  delete context.fn;
  return result;
};
function method (val1, val2) {
  return this.a + this.b + val1 + val2;
}
const obj = {
  a: 1,
  b: 2
};

console.log(method.myApply(obj, [1, 15]))