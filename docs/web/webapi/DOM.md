# DOM

#### 从 JS 基础知识到 JS web API

-   JS 基础知识，规定语法（ECMA262 标准）
-   JS Web API 网页操作的 API(W3C 标准)
-   前者是后者的基础，两者结合才有实际的应用

**JS Web API**
DOM 、BOM 、事件绑定 、ajax 、存储

#### 前言

-   vue 和 React 框架应用广泛，封装了 DOM 操作
-   DOM 操作一直都会是前端工程师的基础，必备知识
-   只会 vue 不懂 DOM 操作的前端程序员不会长久

## DOM 操作 （DocumentObject Model）

### 题目

-   DOM 是哪种数据结构
-   DOM 操作的常用 API
-   attr 和 property 的区别
-   一次插入多个 DOM 节点，考虑性能

### 知识点

-   DOM 本质 - 从 html 解析出来的树
-   DOM 节点操作
-   DOM 结构操作
-   DOM 性能

#### DOM 节点操作

-   获取 DOM 节点
-   attribute
-   property

```js
// 获取 DOM 节点
const div1 = document.getElementById('div1');

const divList = document.getElementsByTagName('div'); // 集合

const containerList = document.getElementsByClassName('container'); // 集合

const pList = document.querySelectorAll('p'); // 集合

// property 形式

p1.style.width = '100px'; // 修改样式
console.log(p1.style);
console.log(p1.style.width); // 获取样式
p1.className = 'red'; // 修改 class
console.log(p1.className); // 获取 class

// 获取 nodeName 和 nodeType
console.log(p1.parentNode);
console.log(p1.nodeName);
console.log(p1.nodeType);

// DOM 节点的 attribute
p1.setAttribute('data-name', 'imooc');
p1.getAttribute('data-name');

p1.getAttribute('style');
p1.setAttribute('style', 'font-size:30px');
```

#### property 和 attribute

-   property : 修改对象属性，不会体现到 html 结构中
-   attribute: 修改 html 属性，会改变 html 结构
-   两者都有可能引起 DOM 重新渲染

## DOM 结构操作

-   新增/插入节点
-   获取所有大的子节点，获取父节点
-   删除子元素

```js
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
// 新建节点
const newP = document.createElement('p');

newP.innerHTML = 'this is p1';

// 插入节点
div1.appendChild(newP);

// 移动节点
const p1 = document.getElementById('p1');

div2.appendChild(p1);

// 获取子元素列表
const divChildNodes = div1.childNodes;
const divChildNodes1 = div1.children; // 非标准
console.log('divChildNodes1', divChildNodes1);

console.log(divChildNodes);
const divChildNodesP = Array.prototype.slice.call(divChildNodes).filter(child => {
    if (child.nodeType === 1) {
        return true;
    }
    return false;
});
console.log(divChildNodesP);

// 获取父元素
const parent = div1.parentNode;
console.log(parent);

// 删除节点  removeChild

div1.removeChild(divChildNodesP[2]);
```

## DOM (重要)

DOM 操作非常“昂贵”，消耗资源，消耗 CPU 计算
避免频繁的 DOM 操作

解决：

-   对 DOM 查询做缓存
-   将频繁操作改为一次性操作

#### DOM 查询做缓存

```js
// 不缓存 DOM 查询结果
for (let = 0; i < document.getElementsByTagName('p').length; i++) {
    // 每次循环，都会计算 length ，频繁进行DOM 查询
}

// 缓存 DOM 查询结果
const pList = document.getElementsByTagName('p');
const length = pList.length;
for (let i = 0; i < length; i++) {
    // 缓存 length, 只进行一次 DOM 查询
}
```

#### 将频繁的 DOM 操作改为一次性操作

```js
const listNode = document.getElementById('list');

// 创建一个文档碎片 此时还没有插入到DOM中
const frag = document.createDocumentFragment();

// 执行插入
for (let x = 0; x < 10; x++) {
    const li = document.createElement('li');
    li.innerHTML = 'List item' + x;
    frag.appendChild(li);
}

// 全都完成后，再插到DOM中
listNode.appendChild(frag);
```

**相关试题：**

-   DOM 操作的常用 API
-   attribute 和 property 的区别
-   DOM 优化 - 文档流碎片
