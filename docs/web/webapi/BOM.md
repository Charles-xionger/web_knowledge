# BOM

## BOM (brower object model)

题目：
如何识别浏览器的类型
分别拆解 url 各个部分

知识点

navigator
screen
loaction
history

## navigator

navigator：浏览器

userAgent ：用户代理

简写： UA

```js
const ua = navigator.userAgent;

const isChrome = ua.indexOf('Chrome');

console.log(isChrome);
```

## screen

## location

```js
location.href; // 链接
location.protocol; // 协议 http https
location.host; // 域名
location.pathname; // 路径
location.search; // 查询参数
loaction.hash; // 哈希值
```

## history

```js
history.back(); // 后退
history.forward(); // 前进
```

### 获取 url 参数的方法

```js
// TODO
```
