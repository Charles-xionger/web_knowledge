const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        }
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        }
      ],
    }
  ],
};


const bfs = (root) => {
  const queue = [root]

  while (queue.length > 0) {
    const head = queue.shift()
    console.log(head.val)
    head.children.forEach(children => {
      queue.push(children)
    });
  }
}

bfs(tree)