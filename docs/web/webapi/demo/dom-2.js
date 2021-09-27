const div1 = document.getElementById("div1")
const div2 = document.getElementById('div2')
// 新建节点
const newP = document.createElement('p')

newP.innerHTML = "this is p1"

// 插入节点
div1.appendChild(newP)


// 移动节点
const p1 = document.getElementById("p1")

div2.appendChild(p1)


// 获取子元素列表
const divChildNodes = div1.childNodes
const divChildNodes1 = div1.children  // 非标准
console.log('divChildNodes1', divChildNodes1)

console.log(divChildNodes)
const divChildNodesP = Array.prototype.slice.call(divChildNodes).filter(child => {
  if (child.nodeType === 1) {
    return true
  }
  return false
})
console.log(divChildNodesP)


// 获取父元素
const parent = div1.parentNode
console.log(parent)


// 删除节点  removeChild

div1.removeChild(divChildNodesP[2])