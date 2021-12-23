exports.b = false;

const a = require('./a');

console.log('b模块，输出了 a 模块的内容是：', a);


exports.b = true
console.log('b模块到这就执行完了');