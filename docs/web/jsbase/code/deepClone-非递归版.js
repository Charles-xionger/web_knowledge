// 循环方式
function cloneDeep(source) {
    if (!(typeof source === 'object' && source !== null)) {
        return source;
    }
    const root = Array.isArray(source) ? [] : {};
    // 定义一个栈
    const loopList = [{
        parent: root,
        key: undefined,
        data: source,
    }];
    while (loopList.length > 0) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;
        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = Array.isArray(data) ? [] : {};
        }
        for (let [childKey, value] of Object.entries(data)) {
            if (typeof value === 'object' && value !== null && !(value
                instanceof RegExp)) {
                loopList.push({
                    parent: res,
                    key: childKey,
                    data: value
                });
            } else {
                res[childKey] = value;
            }
        }
    }
    return root;
}

const obj = {
    a: 10,
    b: undefined,
    c: /\w/g,
    d: function () {
        return true;
    },
    e: {
        m: 20,
        n: 30
    }
};
const result = cloneDeep(obj);
console.log(result)