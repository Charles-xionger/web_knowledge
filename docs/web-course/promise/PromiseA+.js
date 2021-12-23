// getter setter
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

class MPromise {
  FULFILLED_CALLBACK_LIST = [];
  REJECTED_CALLBACK_LIST = [];
  _status = PENDING
  /**
   * description 回调函数
   * @param {resolve,reject} fn 
   */
  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(e);
    }
  }

  get status() {
    return this._status;
  }

  set status(newStatus) {
    this._status = newStatus;
    switch (newStatus) {
      case FULFILLED: {
        this.FULFILLED_CALLBACK_LIST.forEach(callback => {
          callback(this.value);
        })
        break;
      }

      case REJECTED: {
        this.REJECTED_CALLBACK_LIST.forEach(callback => {
          callback(this.reason);
        })
        break;
      }
    }
  }


  resolve(value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = FULFILLED;
    }
  }

  reject(reason) {
    if (this.status === PENDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }

  then(onFulfilled, onRejected) {
    // 6.3
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
      // 值得透传，接收什么返回什么
      return value;
    }

    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
      throw reason;
    }

    // .then 的返回值是一个 promise
    const promise2 = new MPromise((resolve, reject) => {
      // 6.2 如果 onFulfilled 或者 onRejected 执行时抛出异常 e, promise2 需要被 reject
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }

      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }


      // 当调用 .then 的时候， 不同的状态，调用不同的回调
      switch (this.status) {
        case FULFILLED: {
          fulfilledMicrotask();
          break;
        }
        case REJECTED: {
          rejectedMicrotask();
          break;
        }
        case PENDING: {
          this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask)
          this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
          break;
        }
      }
    })


    return promise2
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof MPromise) {
      // 如果 x 是 promise， 那么让新的 promise 接收 x 的状态
      // 继续执行x, 如果执行的时候又拿到了一个y, 那么继续解析y
      x.then((y) => {
        this.resolvePromise(promise2, y, resolve, reject)
      }, reject)
    } else if (typeof x === 'object' || this.isFunction(x)) {
      if (x === null) {
        return resolve(x)
      }
      let then = null;

      try {
        then = x.then
      } catch (error) {
        return reject(error)
      }

      // 如果获取到的then 是一个函数
      if (this.isFunction(then)) {
        let called = false
        try {
          // 将 x 作为函数的作用域 this 调用
          // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
          this.call(
            x,
            (y) => {
              if (called) return;
              called = true
              this.resolvePromise(promise2, y, resolve, reject)
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r)
            })
        } catch (error) {
          if (called) {
            return;
          }
          reject(error)
        }
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }

  isFunction(value) {
    return typeof value === 'function'
  }

  // 静态方法
  static resolve(value) {
    if (value instanceof MPromise) {
      return value
    }

    return new MPromise((resolve) => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new MPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static race(promiseList) {
    return new MPromise((resolve, reject) => {
      const length = promiseList.length

      if (length === 0) {
        return resolve()
      } else {
        for (let i = 0; i < length; i++) {
          MPromise.resolve(promiseList[i]).then(
            (value) => {
              return resolve(value)
            },
            (reason) => {
              return reject(reason)
            }
          )
        }
      }
    })
  }
}

// 异步
// const test = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(111)
//   }, 1000)
// }).then(value => {
//   console.log(value)
// })

// 同步
// const test = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(111)
//   }, 1000)
// }).then(value => {
//   console.log(value)
// })

// const test = new MPromise((resolve, reject) => {
//   reject('promise 报错')
// }).catch(reason => {
//   console.log(reason)
// })


// MPromise.resolve(111).then(value => {
//   console.log(value)
// })


// race
// const test = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(111)
//   }, 1000)
// })

// const test2 = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(222)
//   }, 2000)
// })
// const test3 = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(333)
//   }, 3000)
// })

// MPromise.race([test, test2, test3]).then(console.log)


// const test = new MPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(111)
//   }, 1000)
// }).then(value => {
//   console.log('then')
//   // 此时相当于 return undefined
// })

// setTimeout(() => {
//   console.log(test) // value 是什么值
// }, 3000)


// 问题： 为什么我在catch的回调里，打印test的status是pending，在3s后打印的 test status 是 fulfilled 
const test = new MPromise((resolve, reject) => {
  setTimeout(() => {
    reject(111);
  }, 3000);
}).catch((reason) => {
  console.log('报错' + reason);
  console.log(test) // test status 是什么？ pending
});

setTimeout(() => {
  console.log(test); // test status 是什么？ fulfilled
}, 1000)

// 1.catch函数返回一个新的promise，而test就是这个新的promise
// 2. catch 回调里，打印promise的时候， 整个回调并没有执行完成。pending 只有当整个回调完成了，才会更改状态
// 3. catch 回调函数，如果成功执行完成了，那么新的promise的状态会变成fulfilled