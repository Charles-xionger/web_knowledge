(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{457:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"css-cascading-style-sheets-层叠样式表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-cascading-style-sheets-层叠样式表"}},[t._v("#")]),t._v(" CSS （Cascading Style Sheets） 层叠样式表")]),t._v(" "),s("h2",{attrs:{id:"盒模型-box-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型-box-model"}},[t._v("#")]),t._v(" 盒模型 Box Model")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t/* 代码如下，请问div1的offsetWidth 是多大 */\n\t\t\t#div {\n\t\t\t\twidth: 200px;\n\t\t\t\tpadding: 10px;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tmargin: 10px;\n\t\t\t\t/* box-sizing: border-box; */\n\t\t\t}\n\n\t\t<div id=\"div\"></div>\n\n\t\t控制台 输入\n\t\tdocument.getElementById('div').offsetWidth\n\t\t查询结果\n")])])]),s("p",[t._v("offsetWidth = (内容宽度 +内边距+边框)，无外边距\nbox-sizing 默认是 content-box 高度和宽度应用在内容框，在高度和宽度外绘制 boder 和 margin")]),t._v(" "),s("p",[t._v("box-sizing: border-box 高度和宽度 元素在页面占据的宽和高度")]),t._v(" "),s("h2",{attrs:{id:"margin-纵向重叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin-纵向重叠"}},[t._v("#")]),t._v(" margin 纵向重叠")]),t._v(" "),s("ul",[s("li",[t._v("相邻元素的 margin-top 和 margin-bottom 会发生重叠")]),t._v(" "),s("li",[t._v("空白内容的"),s("code",[t._v("<p></p>")]),t._v("也会重叠")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t<style>\n        p {\n        font-size: 16px;\n        line-height: 1;\n        margin-top: 10px;\n        margin-bottom: 15px;\n        }\n\t</style>\n\n  <body>\n  \t<p>qqqq</p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p></p>\n    <p>wwwww</p>\n  </body>\n\n// 请问qqq和www之间的距离是多少\n// 答案是15px  发生margin在纵向上的重叠，且空白的P标签重叠\n")])])]),s("h2",{attrs:{id:"margin-负值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#margin-负值"}},[t._v("#")]),t._v(" margin 负值")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("margin-top 和 margin-left 负值，元素向上，向左移动")]),t._v(" "),s("ul",[s("li",[t._v("个人理解，下面两种设置负值，可以理解为自身对应方向上的缩小，相对的相邻的元素会随之靠近")])])]),t._v(" "),s("li",[s("p",[t._v("margin-right 负值，右侧元素左移，自身不受影响")])]),t._v(" "),s("li",[s("p",[t._v("margin-bottom 负值，下方元素上移，自身不受影响")])])]),t._v(" "),s("h2",{attrs:{id:"什么是-bfc-怎么触发-解决什么问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bfc-怎么触发-解决什么问题"}},[t._v("#")]),t._v(" 什么是 BFC？怎么触发，解决什么问题？")]),t._v(" "),s("p",[t._v("在页面中，三种文档流：普通流， 定位流， 浮动流，在页面布局时，三种文档流相互影响，产生一些问题。")]),t._v(" "),s("p",[t._v("BFC（Block formatting context） 块级格式化上下文\n作用是： 形成独立的渲染区域， 使得内部的元素不会影响外界。")]),t._v(" "),s("h3",{attrs:{id:"形成-bfc-常见条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#形成-bfc-常见条件"}},[t._v("#")]),t._v(" 形成 BFC 常见条件")]),t._v(" "),s("p",[t._v("body:BFC 元素")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("形成　 BFC 　常见条件")]),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("浮动元素")]),t._v(" "),s("td",[t._v("float 不是 none")])]),t._v(" "),s("tr",[s("td",[t._v("绝对定位元素")]),t._v(" "),s("td",[t._v("position 是 absolute 或者 fixed")])]),t._v(" "),s("tr",[s("td",[t._v("块级元素")]),t._v(" "),s("td",[t._v("overflow 不是 visible")])]),t._v(" "),s("tr",[s("td",[t._v("display 不是 block")]),t._v(" "),s("td",[t._v("flex 元素")])]),t._v(" "),s("tr",[s("td",[t._v("inline-block 元素")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"常见的应用场景-清除浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的应用场景-清除浮动"}},[t._v("#")]),t._v(" 常见的应用场景 ：清除浮动")]),t._v(" "),s("p",[t._v("// 手写 clearfix")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix:after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    *"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("zoom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*兼容 IE 低版本*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("具体解决问题：\nmargin 重合\n发生情景：两个盒子，第一个盒子设置 margin-bottom=20px，第二个盒子设置 margin-top=20px,\nmargin 塌陷\n发生情景：一个盒子内嵌一个盒子，给内部盒子设置上外边距 margin-top = 10px\n高度坍塌\n父盒子由子盒子撑开，给子盒子设置 float 属性，使其脱离文档流，父盒子没有高度")]),t._v(" "),s("h2",{attrs:{id:"float-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float-布局"}},[t._v("#")]),t._v(" float 布局")]),t._v(" "),s("h3",{attrs:{id:"圣杯布局-和-双飞翼布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局-和-双飞翼布局"}},[t._v("#")]),t._v(" 圣杯布局 和 双飞翼布局")]),t._v(" "),s("p",[t._v("圣杯布局（一般用于 PC 端网页布局）")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("目的：")]),t._v(" "),s("ol",[s("li",[t._v("两侧内容宽度固定，中间内容宽度自适应")]),t._v(" "),s("li",[t._v("三栏布局，中间一栏最先加载渲染出来（主要内容）")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("实现方式：\nfloat + margin")]),t._v(" "),s("p",[t._v("双飞翼布局和圣杯布局 实现方式不同")]),t._v(" "),s("ol",[s("li",[t._v("dom 结构的不同")]),t._v(" "),s("li",[t._v("左右盒子 margin 负值的使用不同")])]),t._v(" "),s("h4",{attrs:{id:"示例代码-手写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-手写"}},[t._v("#")]),t._v(" 示例代码（手写）")]),t._v(" "),s("h2",{attrs:{id:"flex-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[t._v("#")]),t._v(" flex 布局")]),t._v(" "),s("h3",{attrs:{id:"flex-常用语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-常用语法"}},[t._v("#")]),t._v(" flex 常用语法")]),t._v(" "),s("h4",{attrs:{id:"父级容器相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父级容器相关"}},[t._v("#")]),t._v(" 父级容器相关")]),t._v(" "),s("p",[t._v("flex-direction 主轴方向 水平方向（默认）、垂直方向\njustify-content 主轴上的对齐方式 - 开始对齐，结束对齐，居中对齐，两端对齐\nalign-items 交叉轴上的对齐方式 - 开始对齐、结束对齐、居中对齐\nflex-wrap 是否换行")]),t._v(" "),s("p",[t._v("flex: 1? flex: 1; === flex: 1 1 auto;")]),t._v(" "),s("h4",{attrs:{id:"子元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子元素"}},[t._v("#")]),t._v(" 子元素")]),t._v(" "),s("p",[t._v("align-self 子元素在交叉轴上的对齐方式 - 开始对齐、结束对齐、居中对齐")]),t._v(" "),s("h3",{attrs:{id:"flex-布局实现色子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局实现色子"}},[t._v("#")]),t._v(" flex 布局实现色子")]),t._v(" "),s("h3",{attrs:{id:"flex-实现瀑布流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-实现瀑布流"}},[t._v("#")]),t._v(" flex 实现瀑布流")]),t._v(" "),s("h2",{attrs:{id:"relative-和-absolute-定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative-和-absolute-定位"}},[t._v("#")]),t._v(" relative 和 absolute 定位")]),t._v(" "),s("h3",{attrs:{id:"relative-定位相对于自身定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relative-定位相对于自身定位"}},[t._v("#")]),t._v(" relative 定位相对于自身定位")]),t._v(" "),s("h3",{attrs:{id:"absolute-定位-最近的一层父级定位元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#absolute-定位-最近的一层父级定位元素"}},[t._v("#")]),t._v(" absolute 定位 最近的一层父级定位元素")]),t._v(" "),s("h3",{attrs:{id:"定位元素-relative-absolute-fixed-或者-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位元素-relative-absolute-fixed-或者-body"}},[t._v("#")]),t._v(" 定位元素 relative absolute fixed 或者 body")]),t._v(" "),s("h2",{attrs:{id:"水平居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[t._v("#")]),t._v(" 水平居中")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("行内元素- inline 元素 ： text-align: center;")])]),t._v(" "),s("li",[s("p",[t._v("块级元素 block 元素： margin： 0 auto;")])]),t._v(" "),s("li",[s("p",[t._v("absolute 定位元素 left：50%;")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("            margin-left 负值 (值大小为元素宽度的一半)\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"垂直居中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[t._v("#")]),t._v(" 垂直居中")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("行内元素 inline 元素 line-height: 100%;")])]),t._v(" "),s("li",[s("p",[t._v("absolue 定位元素：")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("top: 50% + margin-top 负值 (需要知道元素的尺寸， 值是高度的一半)")])]),t._v(" "),s("li",[s("p",[t._v("transform: translate(-50%, -50%) （不需要知道元素的尺寸，css3 存在兼容性的问题）")])]),t._v(" "),s("li",[s("p",[t._v("top left right bottom 都为 0 + margin:auto; （无需知道尺寸，且不存在兼容性问题）")])])]),t._v(" "),s("h2",{attrs:{id:"line-height-继承的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-height-继承的坑"}},[t._v("#")]),t._v(" line-height 继承的坑")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("具体的数值 如： 50px")])]),t._v(" "),s("li",[s("p",[t._v("比例 如 父级元素 1.5")])]),t._v(" "),s("li",[s("p",[t._v("百分比： 200% 子元素 继承父元素的 font-size * 200% = 60px")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ccc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"什么是-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-rem"}},[t._v("#")]),t._v(" 什么是 rem？")]),t._v(" "),s("ul",[s("li",[t._v("px 绝对长度单位")]),t._v(" "),s("li",[t._v("em 相对长度单位 相对于父元素")]),t._v(" "),s("li",[t._v("rem 相对长度单位， 相对于 html 元素")])])])}),[],!1,null,null,null);a.default=n.exports}}]);