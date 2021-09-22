module.exports = {
  title: '前端基础',  // 设置网站标题
  description: '前端基础知识总结',
  base: '/web_knowledge/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'js基础', link: '/web/' },
      { text: '前端课程', link: '/web-course/' },
      { text: '数据结构和算法-JavaScript', link: '/js-algorithm/' }
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/web/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'JS基础',
          collapsable: true,
          children: [
            'jsbase/variable-types',
            'jsbase/prototype-chain',
            'jsbase/scope',
            'jsbase/async',
            'jsbase/async-advanced'
          ]
        },
        {
          title: 'JS-Web-API',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/web-course/': [
        {
          title: '内容简介',
          collapsable: false,
          children: [
            'node/node'
          ]
        },
      ],
      '/js-algorithm/': [
        {
          title: '内容简介',
          collapsable: false,
          children: [
            'linked-list/linked-list',
            'set/set',
            'map/map',
            'tree/tree'
          ]
        },
      ]
    }
  }
}