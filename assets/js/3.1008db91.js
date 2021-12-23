(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{396:function(t,v,_){t.exports=_.p+"assets/img/强制缓存1.d99a1012.png"},397:function(t,v,_){t.exports=_.p+"assets/img/强制缓存2.13a43a7a.png"},398:function(t,v,_){t.exports=_.p+"assets/img/强制缓存3.b43a1962.png"},399:function(t,v,_){t.exports=_.p+"assets/img/协商缓存1.b2107e90.png"},400:function(t,v,_){t.exports=_.p+"assets/img/Last_Modified.3c0d22c5.png"},401:function(t,v,_){t.exports=_.p+"assets/img/ETag.4313a316.png"},402:function(t,v,_){t.exports=_.p+"assets/img/协商缓存流程图.31ebf4d7.png"},469:function(t,v,_){"use strict";_.r(v);var a=_(45),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("前端开发界面时，需要调用后端接口，提交/获取数据 ---http 协议")]),t._v(" "),a("p",[t._v("前提要掌握好 ajax")]),t._v(" "),a("h4",{attrs:{id:"常见的题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的题目"}},[t._v("#")]),t._v(" 常见的题目")]),t._v(" "),a("ul",[a("li",[t._v("http 常见的状态码有哪些？")]),t._v(" "),a("li",[t._v("http 常见的 header 有哪些？")]),t._v(" "),a("li",[t._v("什么是 Restful API ?\n如何去理解？ 给你一个接口你是怎么设计的？\n传统 API 和 Restful API 区别？")]),t._v(" "),a("li",[t._v("描述一下 http 的缓存机制（重要）")])]),t._v(" "),a("h2",{attrs:{id:"http-状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码"}},[t._v("#")]),t._v(" http 状态码")]),t._v(" "),a("h4",{attrs:{id:"状态码分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态码分类"}},[t._v("#")]),t._v(" 状态码分类")]),t._v(" "),a("ul",[a("li",[t._v("1xx 服务器收到请求")]),t._v(" "),a("li",[t._v("2xx 请求成功，如 200")]),t._v(" "),a("li",[t._v("3xx 重定向， 如 301 302 304")]),t._v(" "),a("li",[t._v("4xx 客户端错误，如 401 403 404")]),t._v(" "),a("li",[t._v("5xx 服务端错误，如 500 504")])]),t._v(" "),a("h4",{attrs:{id:"常见状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见状态码"}},[t._v("#")]),t._v(" 常见状态码")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("200 成功")])]),t._v(" "),a("li",[a("p",[t._v("301 永久重定向（配合 location， 浏览器自动处理） 应用场景：网页老域名不使用，返回新地址跳转")])]),t._v(" "),a("li",[a("p",[t._v("302 临时重定向（配合 location，浏览器自动处理） 应用场景：百度搜索页面，点击跳转对应的网址，中间会有一个重定向")])]),t._v(" "),a("li",[a("p",[t._v("304 资源未被修改 应用场景： 缓存，请求服务端数据，服务端返回 304 表示当前数据有效，浏览器使用本地缓存")])]),t._v(" "),a("li",[a("p",[t._v("401 用户没有访问权限，需要进行身份认证。")])]),t._v(" "),a("li",[a("p",[t._v("404 资源未被找到")])]),t._v(" "),a("li",[a("p",[t._v("403 没有权限，未登录，或者角色权限，")])]),t._v(" "),a("li",[a("p",[t._v("500 服务器错误，")])]),t._v(" "),a("li",[a("p",[t._v("504 网关超时")])])]),t._v(" "),a("h2",{attrs:{id:"http-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-methods"}},[t._v("#")]),t._v(" http methods")]),t._v(" "),a("h4",{attrs:{id:"传统的-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统的-methods"}},[t._v("#")]),t._v(" 传统的 methods")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("get 获取服务器的数据")])]),t._v(" "),a("li",[a("p",[t._v("post 向服务器提交数据， 提交表单操作")])])]),t._v(" "),a("h4",{attrs:{id:"现在的-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在的-methods"}},[t._v("#")]),t._v(" 现在的 methods")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("get 获取数据")])]),t._v(" "),a("li",[a("p",[t._v("post 新建数据 ：博客提交")])]),t._v(" "),a("li",[a("p",[t._v("patch/put 更新数据 ：更新留言")])]),t._v(" "),a("li",[a("p",[t._v("delete 删除数据")])])]),t._v(" "),a("h2",{attrs:{id:"restful-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" Restful API")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("传统 API ：把每个 URL 当做一个功能")])]),t._v(" "),a("li",[a("p",[t._v("Restful API 设计： 把每个 url 当做一个唯一的资源（标识或者 ID）")])])]),t._v(" "),a("p",[t._v("两者之间的区别：")]),t._v(" "),a("h3",{attrs:{id:"如何将-restful-api-设计成一个资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何将-restful-api-设计成一个资源"}},[t._v("#")]),t._v(" 如何将 Restful API 设计成一个资源")]),t._v(" "),a("ol",[a("li",[t._v("Restful API 设计不使用 url 参数")])]),t._v(" "),a("ul",[a("li",[t._v("传统 API 设计: /api/list?pageIndex=2")]),t._v(" "),a("li",[t._v("Restful API 设计: /api/list/2")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("用 method 表示操作类型（传统 API 设计 和 Restful API 设计对比）")])]),t._v(" "),a("p",[a("strong",[t._v("传统 API 设计")])]),t._v(" "),a("ul",[a("li",[t._v("POST 请求 /api/create-blog")]),t._v(" "),a("li",[t._v("POST 请求 /api/create-blog?id=100")]),t._v(" "),a("li",[t._v("GET 请求 /api/get-blog?id=100")])]),t._v(" "),a("p",[a("strong",[t._v("Restful API 设计")])]),t._v(" "),a("ul",[a("li",[t._v("post 请求 /api/blog")]),t._v(" "),a("li",[t._v("patch 请求 /api/blog/100")]),t._v(" "),a("li",[t._v("get 请求 /api/blog/100")])]),t._v(" "),a("h2",{attrs:{id:"http-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-header"}},[t._v("#")]),t._v(" http header")]),t._v(" "),a("p",[a("strong",[t._v("常见的 Request Headers（请求）")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("request header")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Accept")]),t._v(" "),a("td",[t._v("浏览器可接收的数据格式")])]),t._v(" "),a("tr",[a("td",[t._v("Accept-Encoding")]),t._v(" "),a("td",[t._v("浏览器可接收的压缩算法，如 gzip，deflate，br")])]),t._v(" "),a("tr",[a("td",[t._v("Accep-Languange")]),t._v(" "),a("td",[t._v("浏览器可接收的语言，如 zh-CN")])]),t._v(" "),a("tr",[a("td",[t._v("Connection")]),t._v(" "),a("td",[t._v("keep-alive 一次 TCP 连接重复使用")])]),t._v(" "),a("tr",[a("td",[t._v("Host")]),t._v(" "),a("td",[t._v("要请求的服务器域名")])]),t._v(" "),a("tr",[a("td",[t._v("cookie")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("User-Agent （简称 UA）")]),t._v(" "),a("td",[t._v("浏览器信息 chrome safari")])]),t._v(" "),a("tr",[a("td",[t._v("Content-type")]),t._v(" "),a("td",[t._v("发送数据的格式。如 application/json")])])])]),t._v(" "),a("p",[a("strong",[t._v("常见 Response Headers（响应）")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("response header")]),t._v(" "),a("th",[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Content-type")]),t._v(" "),a("td",[t._v("返回数据的格式，如 application/json")])]),t._v(" "),a("tr",[a("td",[t._v("Content-length")]),t._v(" "),a("td",[t._v("返回数据的大小，多少字节")])]),t._v(" "),a("tr",[a("td",[t._v("Content-Encoding")]),t._v(" "),a("td",[t._v("返回数据的压缩算法，如 gzip")])]),t._v(" "),a("tr",[a("td",[t._v("set-cookie")]),t._v(" "),a("td",[t._v("服务器端修改 cookie")])])])]),t._v(" "),a("p",[a("strong",[t._v("自定义 header")]),t._v("\n常用的 ajax 库，axios,fetch 支持自定义请求头，应用场景：密钥")]),t._v(" "),a("p",[a("strong",[t._v("缓存相关的 header")])]),t._v(" "),a("ul",[a("li",[t._v("Cache-Control | Expires")]),t._v(" "),a("li",[t._v("Last-Modified | If-Modified-Since")]),t._v(" "),a("li",[t._v("Etag | If-None-Match")])]),t._v(" "),a("h2",{attrs:{id:"http-缓存-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存-重要"}},[t._v("#")]),t._v(" http 缓存（重要）")]),t._v(" "),a("h4",{attrs:{id:"缓存的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的介绍"}},[t._v("#")]),t._v(" 缓存的介绍")]),t._v(" "),a("p",[a("strong",[t._v("1. 什么是缓存？")])]),t._v(" "),a("p",[t._v("对于浏览器，第一次对服务器发起请求后，将返回的部分资源保存的本地")]),t._v(" "),a("p",[t._v("http 缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存")]),t._v(" "),a("p",[t._v("如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。")]),t._v(" "),a("p",[t._v("当你第一次访问网页时，请求资源，第二次访问时，部分数据浏览器存有副本，则不再二次请求，读取本地资源，节约资源")]),t._v(" "),a("p",[a("strong",[t._v("2. 为什么需要缓存")])]),t._v(" "),a("p",[t._v("最大的目的： 提升页面加载的速度")]),t._v(" "),a("ul",[a("li",[t._v("网络请求加载相比于，cpu 计算，页面渲染的速度是最慢的，所以减少网络请求的数量和体积提升整个页面加载的速度")]),t._v(" "),a("li",[t._v("网络请求不稳定的，受限于网络环境的影响")]),t._v(" "),a("li",[t._v("通过优化网络请求，可以提高整体页面加载的稳定性")])]),t._v(" "),a("p",[a("strong",[t._v("3. 哪些资源可以被缓存？ 静态资源（js css img）")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("访问网站时，html 是不能被缓存的，随时会更新")])]),t._v(" "),a("li",[a("p",[t._v("业务数据一般不会被缓存，后台数据的增删改查")])]),t._v(" "),a("li",[a("p",[t._v("webpack 打包资源文件时会在 bundle 文件名后添加+hash 值 ,当文件内容被修改，hash 值随之也会改变")])])]),t._v(" "),a("h3",{attrs:{id:"http-缓存策略-强制缓存-协商缓存-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存策略-强制缓存-协商缓存-重要"}},[t._v("#")]),t._v(" http 缓存策略（强制缓存 + 协商缓存）（重要）")]),t._v(" "),a("h4",{attrs:{id:"强制缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存"}},[t._v("#")]),t._v(" 强制缓存")]),t._v(" "),a("p",[a("content",[a("img",{attrs:{src:_(396)}}),a("img",{attrs:{src:_(397)}}),a("img",{attrs:{src:_(398)}})])]),t._v(" "),a("h4",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),a("ul",[a("li",[t._v("在 Response Headers 中")]),t._v(" "),a("li",[t._v("控制强制缓存的逻辑")]),t._v(" "),a("li",[t._v("例如：Cache-Control: max-age=3153600(单位是秒) 缓存有效期")])]),t._v(" "),a("h4",{attrs:{id:"cache-control-的-值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-的-值"}},[t._v("#")]),t._v(" Cache-Control 的 值")]),t._v(" "),a("ul",[a("li",[t._v("max-age: 最大缓存有效时间（常见）")]),t._v(" "),a("li",[t._v("no-cache ： 不用（强制）本地缓存，直接向服务器获取资源（常见）")]),t._v(" "),a("li",[t._v("no-store : 不用本地缓存，不用服务器缓存,直接让服务器返回数据")]),t._v(" "),a("li",[t._v("private：私人用户缓存")]),t._v(" "),a("li",[t._v("public： 公共资源的缓存，允许中间代理缓存数据")])]),t._v(" "),a("h4",{attrs:{id:"关于-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-expires"}},[t._v("#")]),t._v(" 关于 Expires")]),t._v(" "),a("ul",[a("li",[t._v("在 Response Headers 中")]),t._v(" "),a("li",[t._v("同为控制缓存过期")]),t._v(" "),a("li",[t._v("已被 Cache-Control 代替， 两者都存在以 Cache-Control 为主")])]),t._v(" "),a("h4",{attrs:{id:"协商缓存-对比缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存-对比缓存"}},[t._v("#")]),t._v(" 协商缓存（对比缓存）")]),t._v(" "),a("blockquote",[a("p",[t._v("服务器缓存策略")])]),t._v(" "),a("ul",[a("li",[t._v("由服务器来判断资源是否需要浏览器进行本地缓存")]),t._v(" "),a("li",[t._v("浏览器第二次发送请求时，与服务器协商，服务器判断资源是否修改")]),t._v(" "),a("li",[t._v("如果没有修改，返回 304 状态码。 告诉浏览器可以使用缓存的资源，减少了服务器的数据传输的压力")]),t._v(" "),a("li",[t._v("如果资源有更新和修改，返回 200 状态码和更新后的资源并将缓存的信息一起返回")])]),t._v(" "),a("p",[a("content",[a("img",{attrs:{src:_(399)}})])]),t._v(" "),a("blockquote",[a("p",[t._v("服务器判断资源是否修改? 通过资源标识对比")])]),t._v(" "),a("ul",[a("li",[t._v("在 Response Headers 中，有两种：")]),t._v(" "),a("li",[t._v("Last-Modified 资源的最后修改时间")]),t._v(" "),a("li",[t._v("Etag 资源的唯一标识（一个字符串，类似人类的指纹）\n"),a("content",[a("img",{attrs:{src:_(400)}})]),t._v(" "),a("content",[a("img",{attrs:{src:_(401)}})])])]),t._v(" "),a("h4",{attrs:{id:"last-modified-和-etag-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-etag-对比"}},[t._v("#")]),t._v(" Last-Modified 和 Etag 对比")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("会优先使用 Etag")])]),t._v(" "),a("li",[a("p",[t._v("Last-Modified 只能精确到秒级，相对于计算机以毫秒级，时间区间太宽泛了，")])]),t._v(" "),a("li",[a("p",[t._v("如果资源被重复生成，但是内容不变，Etag 更精确。Etag 是根据内容进行判断的。")]),t._v(" "),a("p",[a("content",[a("img",{attrs:{src:_(402)}})])])])]),t._v(" "),a("h4",{attrs:{id:"刷新操作方式-对缓存的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新操作方式-对缓存的影响"}},[t._v("#")]),t._v(" 刷新操作方式，对缓存的影响")]),t._v(" "),a("p",[a("strong",[t._v("三种刷新操作：")])]),t._v(" "),a("p",[t._v("正常操作：地址栏输入 url , 跳转链接，前进后退等")]),t._v(" "),a("p",[t._v("手动刷新： F5，点击刷新按钮，右击菜单刷新")]),t._v(" "),a("p",[t._v("强制刷新： ctrl + F5")]),t._v(" "),a("p",[t._v("不同刷新操作，不同的缓存策略")]),t._v(" "),a("p",[t._v("正常操作： 强制缓存有效，协商缓存有效")]),t._v(" "),a("p",[t._v("手动刷新: 强制缓存失效，协商缓存有效")]),t._v(" "),a("p",[t._v("强制刷新： 强制缓存失效，协商缓存失效")])])}),[],!1,null,null,null);v.default=e.exports}}]);