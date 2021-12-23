# 类 class

在 ES6 新增加类的概念 ，可以使用 Class 关键字声明一个类 之后用这个类来实例化对象

类 抽象了对象的公共部分，它泛指一个大类
对象 特指某一个，通过实例化一个具体的对象

## 继承

### extends

### super 执行父类的构造函数

### 扩展或者重写方法

## 使用类 3 个注意点

1. 在 ES6 中没有变量提升，所以必须先定义类，才能通过类实例化对象
2. 类里面的共有属性和方法一定要加 this 使用
3. 类里面的 this 的指向问题
4. constructor 里面的 this 指向实例对象，方法里面的 this 指向方法的调用者