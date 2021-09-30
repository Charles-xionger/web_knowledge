// 文件系统
const fs = require('fs')

// 在 node 中最好使用 绝对路径表示目标文件
const path = require('path')

const pathToFile = path.resolve(__dirname, './text')
// 在node.js中支持回调的函数 满足 error first

// 异步逻辑，通过回调函数来实现读取
// fs.readFile(pathToFile, 'utf-8', function (err, result) {
//   if (err) {
//     console.log("error", err)
//     return err
//   }
//   console.log('result', result)
// })


// // 同步的API fs,redFileSync  
// const content = fs.readFileSync(pathToFile, 'utf-8')

// console.log('sync content', content)  // 同步代码 会阻塞


// 将回调函数封装成promise对象返回
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function (err, result) {
        if (err) return reject(err)
        return resolve(result)
      })
      return func.apply(func, args)
    })

  }
}


const readFileAsync = promisify(fs.readFile);
readFileAsync(pathToFile, 'utf-8')
  .then(content => {
    console.log('content', content)
  })
  .catch(e => {
    console.log('e', e)
  })


 //  node utils 已经封装了这个函数