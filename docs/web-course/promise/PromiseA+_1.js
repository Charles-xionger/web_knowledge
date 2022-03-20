// 三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MPromise {
  FULFILLED_CALLBACK_LIST = []
  REJECTED_CALLBACK_LIST = []
  // 存储getter 和 setter 状态的一个私有变量
  _status = PENDING

  constructor(fn) {
    // 初始状态为pending
    this.status = PENDING;
    this.value = null;
    this.reason = null;

    try {
      // fn为普通函数，this 中不含resolve() 和 reject（）
      // 此处传参使用bind,将this指向当前实例
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  get status () {
    return this._status;
  }

  set status (newStatus) {
    this._status = newStatus;
    switch (newStatus) {
      case FULFILLED: {
        // PENDING　-> FULFILLED 遍历数组 FULFILLED_CALLBACK_LIST， 执行回调函数
        this.FULFILLED_CALLBACK_LIST.forEach(callback => {
          callback(this.value);
        });
        break;
      }
      case REJECTED: {
        this.REJECTED_CALLBACK_LIST.forEach(callback => {
          callback(this.reason);
        });
        break;
      }
    }
  }

  resolve (value) {
    if (this.status === PENDING) {
      this.value = value;
      this.status = FULFILLED;
    }
  }

  reject (reason) {
    if (this.status === PENDING) {
      this.reason = reason;
      this.status = REJECTED;
    }
  }

  then (onFulfilled, onRejected) {
    // 6.3 如果 onFulfilled 不是一个函数, promise2 以promise1的value 触发fulfilled
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
      return value;
    }
    const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
      throw reason;
    };

    // .then的返回值整体是一个promise
    const promise2 = new MPromise((resolve, reject) => {
      // 7.1
      // onFulfilled 和 onRejected 是微任务
      // 咱们可以用queueMicrotask包裹执行函数
      const fulfilledMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnFulfilled(this.value)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            const x = realOnRejected(this.reason)
            this.resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }

      // 当调用.then的时候，不同状态，调用不同的回调
      switch (this.status) {
        case FULFILLED: {
          fulfilledMicrotask()
          break;
        }
        case REJECTED: {
          rejectedMicrotask()
          break;
        }
        case PENDING: {
          this.FULFILLED_CALLBACK_LIST.push(fulfilledMicrotask);
          this.REJECTED_CALLBACK_LIST.push(rejectedMicrotask)
          break;
        }
      }
    })

    return promise2
  }
  catch (onRejected) {
    return this.then(null, onRejected)
  }
  resolvePromise (promise2, x, resolve, reject) {
    // 如果 newPromise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 newPromise
    // 这是为了防止死循环
    if (promise2 === x) {
      return reject(new TypeError('The promise and the returnn value are the same'))
    }

    if (x instanceof MPromise) {
      x.then((y) => {
        this.resolvePromise(promise2, y, resolve, reject)
      }, reject)
    } else if (typeof x === 'object' || this.isFunction(x)) {
      // 考虑边界条件 null
      if (x === null) {
        // null 也会被判断为对象
        return resolve(x)
      }
      let then = null

      try {
        then = x.then
      } catch (e) {
        return reject(e)
      }


      if (this.isFunction(then)) {
        let called = false
        // 将 x 作为函数的作用域 this 调用
        // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
        try {
          then.call(x, (y) => {
            if (called) return
            called = true
            this.resolvePromise(promise2, y, resolve, reject)
          }, (r) => {
            if (called) return
            called = true
            reject(r)
          })
        } catch (error) {
          if (called) return
          reject(error)
        }
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }
  static resolve (value) {
    if (value instanceof MPromise) {
      return value
    }

    return new MPromise((resolve) => {
      resolve(value)
    })
  }

  static reject (reason) {
    return new MPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static race (promiseList) {

    return new MPromise((resolve, reject) => {
      const length = promiseList.length
      if (length === 0) {
        return resolve()
      } else {
        for (let i = 0; i < length; i++) {
          MPromise.resolve(promiseList[i].then(
            (value) => {
              return resolve(value)
            },
            (reason) => {
              return reject(reason)
            }))
        }
      }
    })
  }
  isFunction (value) {
    return typeof value === 'function'
  }
}
const test = new MPromise((resolve, reject) => {
  setTimeout(() => {
    reject(111);
  }, 1000);
}).catch((reason) => {
  console.log('报错' + reason);
  console.log(test)
});