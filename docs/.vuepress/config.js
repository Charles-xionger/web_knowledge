

module.exports = {
  title: '蒋新波的个人博客',  // 设置网站标题
  description: '学习记录',
  base: '/',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: 'vue',
        items: [
          {
            text: 'vue基础',
            link: '/vue/vue-base/'
          }
        ]
      },
      { text: 'React', link: '/react/' },
      {
        text: '基础知识点总结',
        items: [
          {
            text: 'HTML和CSS',
            link: '/web/html-css/'
          },
          {
            text: 'JavaScript基础',
            link: '/web/jsbase/'
          },
          {
            text: 'JavaScript-WebAPI',
            link: '/web/webapi/'
          },
          {
            text: '运行环境',
            link: '/web/de/'
          }
        ]
      },
      {
        text: '前端进阶',
        items: [
          {
            text: 'PromiseA+',
            link: '/web-course/promise/'
          },
          {
            text: 'TypeScript',
            link: '/web-course/TS/'
          },
          {
            text: 'ES6',
            link: '/web-course/es6/'
          },
          {
            text: 'React',
            link: '/web-course/react/'
          }
        ]
      },
      {
        text: '数据结构和算法-JavaScript',
        items: [
          // {
          //     text: '栈（缺）',
          //     link: '/js-algorithm/linked-list/'
          // },
          // {
          //     text: '队列（缺）',
          //     link: '/js-algorithm/linked-list/'
          // },
          {
            text: '链表',
            link: '/js-algorithm/linked-list/'
          },
          {
            text: '集合',
            link: '/js-algorithm/set/'
          },
          {
            text: '字典',
            link: '/js-algorithm/map/'
          },
          {
            text: '树',
            link: '/js-algorithm/tree/'
          },
          {
            text: '图',
            link: '/js-algorithm/graph/'
          },
          {
            text: '搜索排序',
            link: '/js-algorithm/sort-search/'
          }
        ]
      }
    ],
    navbar: true,
    sidebar: {
      '/web/jsbase/': [
        {
          title: 'JS基础',
          collapsable: false,
          children: [
            'variable-types',
            'prototype-chain',
            'scope',
            'async'
          ]
        },
      ],
      '/web/html-css/': [
        {
          title: 'html 和 css',
          collapsable: true,
          children: [
            'html',
            'css'
          ]
        },
      ],
      '/web/webapi/': [
        {
          title: 'WebAPI',
          collapsable: true,
          children: [
            'DOM',
            'BOM',
            'event',
            'ajax',
            'storage',
            'http'
          ]
        },
      ],
      '/web/de/': [
        {
          title: '运行环境',
          collapsable: true,
          children: [
            'chrome',
            'de',
            'git'
          ]
        }
      ],
      '/web-course/promise/': [
        {
          title: 'PromiseA+规范',
          collapsable: true,
          children: [
            'promiseA+'
          ]
        },
      ],
      '/web-course/TS/': [
        {
          title: 'TS 部分基础知识',
          collapsable: true,
          children: [
            'typescript'
          ]
        },
      ],
      '/web-course/es6/': [
        {
          title: '面向对象编程',
          collapsable: false,
          children: [
            'class',
            'const',
            'function_arrow',
            'OOP'
          ]
        }, {
          title: '作用域-this-闭包',
          collapsable: false,
          children: [
            'scope'
          ]
        },
      ],
      '/web-course/react/': [
        {
          title: 'Reat基础',
          collapsable: false,
          children: [
            'react-base'
          ]
        }
      ],
      '/js-algorithm/tree/': [
        {
          title: '数据结构-树',
          collapsable: true,
          children: [
            'tree'
          ]
        }
      ],
      '/js-algorithm/graph/': [
        {
          title: '数据结构-图',
          collapsable: true,
          children: [
            'graph'
          ]
        }
      ],
      '/js-algorithm/map/': [
        {
          title: '数据结构-哈希表',
          collapsable: true,
          children: [
            'map'
          ]
        }
      ],
      '/js-algorithm/sort-search/': [
        {
          title: '数据结构-搜索和查找',
          collapsable: true,
          children: [
            'search',
            'sort'
          ]
        }
      ]
    }
  }
}