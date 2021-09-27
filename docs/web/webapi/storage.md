# 存储

## 描述 cookie localStorage sessionStorage 区别

#### cookie

本身用于浏览器和 server 通讯，http 请求一部分
早期 html5 被“借用”到本地存储中
document.cookie = '' 来修改
键值对的形式，以分号进行分割,同一个 key 覆盖，不同 key 追加

```js
document.cookie = 'a=10;';
document.cookie;
document.cookie = 'b=10;';
```

#### cookie 缺点

-   存储大小 最大存储 4k
-   http 请求时需要发送到服务端，增加请求的数据量
-   只能用 document.cookie = '' 来修改

## localStorage 和 sessionStorage

-   html5 专门为存储而设计的，最大存储 5M
-   API 简单易用 setItem getItem
-   本地存储，不会随着 http 请求发送

```js
localStorage.setItem('a', 100);
localStorage.getItem('a'); // 输出字符串的100 ，强制字符串转换
sessionStorage.setItem('b', 200);
sessionStorage.getItem('b');
```

-   localStorage 数据永久存储，除非代码或者手动删除
-   sessionStorage 数据只会存在于当前会话，浏览器关闭则清空 //用户权限登录
-   一般用 localStorage 会更多一些

区别： 1.容量 2.API 可用性问题 3.本地存储
