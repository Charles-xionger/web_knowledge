// http.js
// 在node.js 启动 http 服务 ，监听端口
// 发起 http 请求

const http = require('http')

const proxy = http.createServer((req, res) => {
  res.writeHead(200, { 'x-zhuawa': 'hello-zhuawa' })
  res.end('hello word')
})

proxy.listen(8888, '127.0.0.1', () => {
  console.log('server start')
})