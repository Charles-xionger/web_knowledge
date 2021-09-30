const path = require('path')

// 常用的API  path.resolve() path.join()

const resolvePath = path.resolve('a', 'b', 'c')

console.log(resolvePath) // 绝对路径


const joinPath = path.join('a', 'b', 'c')
console.log(joinPath) // 相对路径


const resolvePath1 = path.resolve('a', '..', 'b', 'c')
// .. 代表上一层 在路径拼接时和上一层a 抵消
console.log(resolvePath1)

const resolvePath2 = path.resolve('a', 'b', 'c/') // 返回目录
const resolvePath3 = path.resolve('a', 'b', 'c/a.js')  // 返回文件


// join 仅仅拼接，不对返回的内容进行判断


// __dirname 路径 和 __ filename 文件名

console.log(__dirname)
console.log(__filename)


path.extname(__filename)  // 返回文件的后缀
path.basename(__filename) // 返回文件名
path.dirname(__filename) // 返回文件的目录