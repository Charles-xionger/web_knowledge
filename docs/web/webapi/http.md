# http

前端开发界面时，需要调用后端接口，提交/获取数据 ---http 协议

前提要掌握好 ajax

#### 常见的题目

-   http 常见的状态码有哪些？
-   http 常见的 header 有哪些？
-   什么是 Restful API ?
    如何去理解？ 给你一个接口你是怎么设计的？
    传统 API 和 Restful API 区别？
-   描述一下 http 的缓存机制（重要）

## http 状态码

#### 状态码分类

-   1xx 服务器收到请求
-   2xx 请求成功，如 200
-   3xx 重定向， 如 301 302 304
-   4xx 客户端错误，如 401 403 404
-   5xx 服务端错误，如 500 504

#### 常见状态码

-   200 成功
-   301 永久重定向（配合 location， 浏览器自动处理） 应用场景：网页老域名不使用，返回新地址跳转
-   302 临时重定向（配合 location，浏览器自动处理） 应用场景：百度搜索页面，点击跳转对应的网址，中间会有一个重定向
-   304 资源未被修改 应用场景： 缓存，请求服务端数据，服务端返回 304 表示当前数据有效，浏览器使用本地缓存
-   401 用户没有访问权限，需要进行身份认证。

-   404 资源未被找到

-   403 没有权限，未登录，或者角色权限，

-   500 服务器错误，

-   504 网关超时

## http methods

#### 传统的 methods

-   get 获取服务器的数据

-   post 向服务器提交数据， 提交表单操作

#### 现在的 methods

-   get 获取数据

-   post 新建数据 ：博客提交

-   patch/put 更新数据 ：更新留言

-   delete 删除数据

## Restful API

-   传统 API ：把每个 URL 当做一个功能

-   Restful API 设计： 把每个 url 当做一个唯一的资源（标识或者 ID）

两者之间的区别：

1. Restful API 设计不使用 url 参数

-   传统 API 设计: /api/list?pageIndex=2
-   Restful API 设计: /api/list/2

2. 用 method 表示操作类型（传统 API 设计 和 Restful API 设计对比）

**传统 API 设计**

-   POST 请求 /api/create-blog
-   POST 请求 /api/create-blog?id=100
-   GET 请求 /api/get-blog?id=100

**Restful API 设计**

-   post 请求 /api/blog
-   patch 请求 /api/blog/100
-   get 请求 /api/blog/100

## http header

**常见的 Request Headers（请求）**
| request header | description |
| ---------------------- | -------------------------------------------- |
| Accept | 浏览器可接收的数据格式 |
| Accept-Encoding | 浏览器可接收的压缩算法，如 gzip，deflate，br |
| Accep-Languange | 浏览器可接收的语言，如 zh-CN |
| Connection | keep-alive 一次 TCP 连接重复使用 |
| Host | 要请求的服务器域名 |
| cookie | |
| User-Agent （简称 UA） | 浏览器信息 chrome safari |
| Content-type | 发送数据的格式。如 application/json |

**常见 Response Headers（响应）**
| response header | description |
| ---------------- | ----------------------------------- |
| Content-type | 返回数据的格式，如 application/json |
| Content-length | 返回数据的大小，多少字节 |
| Content-Encoding | 返回数据的压缩算法，如 gzip |
| set-cookie | 服务器端修改 cookie |

**自定义 header**
常用的 ajax 库，axios,fetch 支持自定义请求头，应用场景：密钥

**缓存相关的 header**

-   Cache-Control | Expires
-   Last-Modified | If-Modified-Since
-   Etag | If-None-Match

## http 缓存（重要）

#### 缓存的介绍

**1. 什么是缓存？**
对于浏览器，第一次对服务器发起请求后，将返回的部分资源保存的本地

http 缓存指的是: 当客户端向服务器请求资源时，会先抵达浏览器缓存

如果浏览器有“要请求资源”的副本，就可以直接从浏览器缓存中提取而不是从原始服务器中提取这个资源。

当你第一次访问网页时，请求资源，第二次访问时，部分数据浏览器存有副本，则不再二次请求，读取本地资源，节约资源
**2. 为什么需要缓存**
最大的目的： 提升页面加载的速度

-   网络请求加载相比于，cpu 计算，页面渲染的速度是最慢的，所以减少网络请求的数量和体积提升整个页面加载的速度
-   网络请求不稳定的，受限于网络环境的影响
-   通过优化网络请求，可以提高整体页面加载的稳定性

**哪些资源可以被缓存？ 静态资源（js css img）**

-   访问网站时，html 是不能被缓存的，随时会更新

-   业务数据一般不会被缓存，后台数据的增删改查

-   webpack 打包资源文件时会在 bundle 文件名后添加+hash 值 ,当文件内容被修改，hash 值随之也会改变

### http 缓存策略（强制缓存 + 协商缓存）（重要）

#### 强制缓存

<content><img src="../images/强制缓存1.png"><img src="../images/强制缓存2.png"><img src="../images/强制缓存3.png"></content>

#### Cache-Control

-   在 Response Headers 中
-   控制强制缓存的逻辑
-   例如：Cache-Control: max-age=3153600(单位是秒) 缓存有效期

#### Cache-Control 的 值

-   max-age:最大缓存有效时间（常见）
-   no-cache ： 不用（强制）本地缓存，直接向服务器获取资源（常见）
-   no-store : 不用本地缓存，不用服务器缓存
-   private：私人用户缓存
-   public： 公共资源的缓存

#### 关于 Expires

-   在 Response Headers 中
-   同为控制缓存过期
-   已被 Cache-Control 代替， 两者都存在以 Cache-Control 为主

#### 协商缓存（对比缓存）

> 服务器缓存策略

-   由服务器来判断资源是否需要浏览器进行本地缓存
-   浏览器第二次发送请求时，与服务器协商，服务器判断资源是否修改
-   如果没有修改，返回 304 状态码。 告诉浏览器可以使用缓存的资源，减少了服务器的数据传输的压力
-   如果资源有更新和修改，返回 200 状态码和更新后的资源并将缓存的信息一起返回

<content><img src="../images/协商缓存1.png"></content>

> 服务器判断资源是否修改? 通过资源标识对比

-   在 Response Headers 中，有两种：
-   Last-Modified 资源的最后修改时间
-   Etag 资源的唯一标识（一个字符串，类似人类的指纹）
    <content><img src="../images/Last_Modified.png"></content>
    <content><img src="../images/ETag.png"></content>

#### Last-Modified 和 Etag 对比

-   会优先使用 Etag
-   Last-Modified 只能精确到秒级，相对于计算机以毫秒级，时间区间太宽泛了，
-   如果资源被重复生成，但是内容不变，Etag 更精确。Etag 是根据内容进行判断的。

    <content><img src="../images/协商缓存流程图.png"></content>

#### 刷新操作方式，对缓存的影响

**三种刷新操作：**

正常操作：地址栏输入 url , 跳转链接，前进后退等

手动刷新： F5，点击刷新按钮，右击菜单刷新

强制刷新： ctrl + F5

不同刷新操作，不同的缓存策略

正常操作： 强制缓存失效，协商缓存有效

手动刷新: 强制缓存失效，协商缓存有效

强制刷新： 强制缓存失效，协商缓存失效

<content><img src="../images/http总结.png"></content>
