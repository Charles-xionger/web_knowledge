# CSS （Cascading Style Sheets） 层叠样式表

## 盒模型 Box Model

```
	/* 代码如下，请问div1的offsetWidth 是多大 */
			#div {
				width: 200px;
				padding: 10px;
				border: 1px solid #ccc;
				margin: 10px;
				/* box-sizing: border-box; */
			}

		<div id="div"></div>

		控制台 输入
		document.getElementById('div').offsetWidth
		查询结果
```

offsetWidth = (内容宽度 +内边距+边框)，无外边距
box-sizing 默认是 content-box 高度和宽度应用在内容框，在高度和宽度外绘制 boder 和 margin

box-sizing: border-box 高度和宽度 元素在页面占据的宽和高度

## margin 纵向重叠

-   相邻元素的 margin-top 和 margin-bottom 会发生重叠
-   空白内容的`<p></p>`也会重叠

```
	<style>
        p {
        font-size: 16px;
        line-height: 1;
        margin-top: 10px;
        margin-bottom: 15px;
        }
	</style>

  <body>
  	<p>qqqq</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p>wwwww</p>
  </body>

// 请问qqq和www之间的距离是多少
// 答案是15px  发生margin在纵向上的重叠，且空白的P标签重叠
```

## margin 负值

-   margin-top 和 margin-left 负值，元素向上，向左移动

    -   个人理解，下面两种设置负值，可以理解为自身对应方向上的缩小，相对的相邻的元素会随之靠近

-   margin-right 负值，右侧元素左移，自身不受影响

-   margin-bottom 负值，下方元素上移，自身不受影响

## 什么是 BFC？怎么触发，解决什么问题？

在页面中，三种文档流：普通流， 定位流， 浮动流，在页面布局时，三种文档流相互影响，产生一些问题。

BFC（Block formatting context） 块级格式化上下文
作用是： 形成独立的渲染区域， 使得内部的元素不会影响外界。

### 形成 BFC 常见条件

body:BFC 元素

| 形成　 BFC 　常见条件 |                                 |
| --------------------- | ------------------------------- |
| 浮动元素              | float 不是 none                 |
| 绝对定位元素          | position 是 absolute 或者 fixed |
| 块级元素              | overflow 不是 visible           |
| display 不是 block    | flex 元素                       |
| inline-block 元素     |                                 |

### 常见的应用场景 ：清除浮动

// 手写 clearfix

```css
.clearfix:after {
    content: '';
    display: table;
    clear: both;
}
.clearfix {
    *zoom: 1; /*兼容 IE 低版本*/
}
```

具体解决问题：
margin 重合
发生情景：两个盒子，第一个盒子设置 margin-bottom=20px，第二个盒子设置 margin-top=20px,
margin 塌陷
发生情景：一个盒子内嵌一个盒子，给内部盒子设置上外边距 margin-top = 10px
高度坍塌
父盒子由子盒子撑开，给子盒子设置 float 属性，使其脱离文档流，父盒子没有高度

## float 布局

### 圣杯布局 和 双飞翼布局

圣杯布局（一般用于 PC 端网页布局）

---

目的：

1. 两侧内容宽度固定，中间内容宽度自适应
2. 三栏布局，中间一栏最先加载渲染出来（主要内容）

---

实现方式：
float + margin

双飞翼布局和圣杯布局 实现方式不同

1. dom 结构的不同
2. 左右盒子 margin 负值的使用不同

#### 示例代码（手写）

## flex 布局

### flex 常用语法

#### 父级容器相关

flex-direction 主轴方向 水平方向（默认）、垂直方向
justify-content 主轴上的对齐方式 - 开始对齐，结束对齐，居中对齐，两端对齐
align-items 交叉轴上的对齐方式 - 开始对齐、结束对齐、居中对齐
flex-wrap 是否换行

flex: 1? flex: 1; === flex: 1 1 auto;

#### 子元素

align-self 子元素在交叉轴上的对齐方式 - 开始对齐、结束对齐、居中对齐

### flex 布局实现色子

### flex 实现瀑布流

## relative 和 absolute 定位

### relative 定位相对于自身定位

### absolute 定位 最近的一层父级定位元素

### 定位元素 relative absolute fixed 或者 body

## 水平居中

1.  行内元素- inline 元素 ： text-align: center;

2.  块级元素 block 元素： margin： 0 auto;

3.  absolute 定位元素 left：50%;

                    margin-left 负值 (值大小为元素宽度的一半)

## 垂直居中

1. 行内元素 inline 元素 line-height: 100%;

2. absolue 定位元素：

-   top: 50% + margin-top 负值 (需要知道元素的尺寸， 值是高度的一半)

-   transform: translate(-50%, -50%) （不需要知道元素的尺寸，css3 存在兼容性的问题）

-   top left right bottom 都为 0 + margin:auto; （无需知道尺寸，且不存在兼容性问题）

## line-height 继承的坑

-   具体的数值 如： 50px

-   比例 如 父级元素 1.5

-   百分比： 200% 子元素 继承父元素的 font-size \* 200% = 60px

```html
<style>
    body {
        font-size: 20px;
    }
    p {
        background-color: #ccc;
        font-size: 16px;
        line-height: 200%;
    }
</style>
```

## 什么是 rem？

-   px 绝对长度单位
-   em 相对长度单位 相对于父元素
-   rem 相对长度单位， 相对于 html 元素
