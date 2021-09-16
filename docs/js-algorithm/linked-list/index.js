const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;


// 遍历链表
let p = a;
while (p) {
  console.log(p.val)
  p = p.next
}

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除链表
c.next = d

// 反转链表 双指针遍历链表

function reverseList(head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const temp = p1.next
    p1.next = p2
    p2 = p1
    p1 = temp
  }
  return p2
}

// 反转链表 递归

var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

const result = reverseList(p)

console.log(result)