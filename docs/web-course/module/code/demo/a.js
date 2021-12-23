exports.a = false;

const b = require('./b');

console.log('a模块，输出了 b 模块的内容是：', b);

exports.a = true
console.log('a模块到这就执行完了');