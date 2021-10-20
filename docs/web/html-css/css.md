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
box-sizing 默认是 content-box

## 什么是 BFC？

BFC（Block formatting context） 块级格式化上下文
作用是： 形成独立的渲染区域， 使得内部的元素不会影响外界。

### 形成 BFC 常见条件

| 形成　 BFC 　常见条件 |                                 |
| --------------------- | ------------------------------- |
| 浮动元素              | float 不是 none                 |
| 绝对定位元素          | position 是 absolute 或者 fixed |
| 块级元素              | overflow 不是 visible           |
| flex 元素             |                                 |
| inline-block 元素     |                                 |

### 常见的应用场景 ：清除浮动
