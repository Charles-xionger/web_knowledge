function longTimeFn(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}


// generator 生成器 语法糖， 控制函数的执行

function* generator() {
  const list = [1, 2, 3]
  for (let i of list) {
    yield i;
  }
}

let g = generator();

console.log(g.next())