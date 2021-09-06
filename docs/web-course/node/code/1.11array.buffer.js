const buffer = new ArrayBuffer(8)

console.log(buffer)

// int16 int32
const int16Buffer = new Int16Array(buffer)
console.log(int16Buffer) // Int16Array(4) [ 0, 0, 0, 0 ]

const unit8 = new Uint8Array(2)
unit8[0] = 42
console.log(unit8[0]) // 42
console.log(unit8.length) // 2
console.log(unit8.BYTES_PER_ELEMENT) // 1 每个元素对应的字节数

const arr = new Uint8Array([11, 13])
console.log(arr[1])
// 可以理解为数组，多了和内存相关的属性


const buf4 = Buffer.from('hello world', 'ascii')

console.log(buf4)

console.log(buf4.toString('base64'))
