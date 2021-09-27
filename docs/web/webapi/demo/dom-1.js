// // 获取 DOM 节点
// const div1 = document.getElementById('div1')
// console.log(div1)

// const divList = document.getElementsByTagName('div')
// console.log(divList)
// console.log(divList.length)
// console.log(divList[0])

// const containerList = document.getElementsByClassName('container')
// console.log(containerList)

const pList = document.querySelectorAll('p')
const p1 = pList[0]

// property 形式

p1.style.width = '100px' // 修改样式
console.log(p1.style)
console.log(p1.style.width) // 获取样式
p1.className = 'red' // 修改 class
console.log(p1.className) // 获取 class

// 获取 nodeName 和 nodeType
console.log(p1.parentNode)
console.log(p1.nodeName)
console.log(p1.nodeType)


// DOM 节点的 attribute 
p1.setAttribute('data-name', 'imooc') 
p1.getAttribute('data-name')

p1.getAttribute('style')
p1.setAttribute('style', 'font-size:30px')