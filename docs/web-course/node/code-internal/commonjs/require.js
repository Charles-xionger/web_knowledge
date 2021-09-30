const vm = require('vm')

const path = require('path')

const fs = require('fs')

const pathToFile = path.resolve(__dirname, './index.js')
const content = fs.readFileSync(pathToFile, 'utf-8')


// vm 将字符串转变为可执行的代码
const script = new vm.Script(content, {
  filename: 'index.js'
})

const result = script.runInThisContext()