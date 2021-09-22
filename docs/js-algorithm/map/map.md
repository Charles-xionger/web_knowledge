# 字典

#### 字典简介

-   字典是一种存储唯一值的数据结构，以`键值对`的形式存储
-   与集合类似
-   ES6 中有字典结构，为 Map
-   字典常用操作：键值对的增删改查

```js
const map = new Map();

// 增

map.set('a', '1');
map.set('b', '1');

// 删
map.delete('b');
map.clear();

// 改
map.set('a', '3');
```

#### Leetcode 算法题

#### [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)

**利用 Map 进行解答**

**解题思路**

-   求 nums1 和 nums2 都有的值。
-   用字典建立一个映射关系，记录 nums1 里有的值。
-   遍历 nums2，找出 nums1 里也有的值。

**解题步骤**

-   新建一个字典，遍历 nums1, 填充字典

-   遍历 nums2, 遇到字典里的值就选出，并从字典中删除（避免重复选值）

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(i => {
        map.set(i, true);
    });

    const res = [];

    nums2.forEach(i => {
        if (map.get(i)) {
            res.push(i);
            map.delete(i);
        }
    });
    return res;
};
```

[20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
**优化**
用字典数据结构进行优化

**解题思路：**

越靠后右括号匹配的左括号越靠前， 类似于栈的，先入后出

**解题步骤：**

遇到左括号压入栈中
遇到右括号，查找栈顶是否匹配 ，匹配弹出，不匹配返回 false

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    const stack = [];
    const map = new Map();
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');
    for (let i = 0; i < s.length; i += 1) {
        const c = s[i];
        if (map.has(c)) {
            stack.push(c);
        } else {
            const t = stack[stack.length - 1];
            if (map.get(t) === c) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
```

[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N) 降低到 O(1)。

这样我们创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，即可保证不会让 x 和自己匹配。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
// 时间复杂度 O(n^2)
// 空间复杂度 O(1)
```

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        const n = nums[i];
        const n2 = target - n;
        if (map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n, i);
        }
    }
};
// 时间复杂度 O(n)
// 空间复杂度 O(n)
```

[3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

**滑动窗口**

**解题思路**

-   先找出所有的不包含重复字符的子串
-   找出长度最大的那个子串，返回其长度即可

**解题步骤**

-   用双指针维护一个滑动窗口，用来剪切子串
-   不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下以为
-   过程中，记录所有窗口的长度，并返回最大值
