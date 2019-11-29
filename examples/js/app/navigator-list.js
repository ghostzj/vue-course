export default [
  {
    id: '1',
    module: 'Guide',
    label: 'Vue Course',
    path: '/guide/data-binding',
    children: [
      {
        id: '101',
        module: 'Guide_DataBinding',
        path: '/guide/data-binding',
        label: '双向数据绑定',
        component: 'DataBinding'
      },
      {
        id: '102',
        module: 'Guide_UsedDirective',
        path: '/guide/used-directive',
        label: '常用指令',
        component: 'UsedDirective'
      },
      {
        id: '103',
        module: 'Guide_StyleBind',
        path: '/guide/style-bind',
        label: '样式绑定',
        component: 'StyleBind'
      },
      {
        id: '104',
        module: 'Guide_EventHandle',
        path: '/guide/event-handle',
        label: '事件处理',
        component: 'EventHandle'
      },
      {
        id: '105',
        module: 'Guide_Attribute',
        path: '/guide/attribute',
        label: '属性方法',
        component: 'Attribute'
      },
      {
        id: '106',
        module: 'Guide_Component',
        path: '/guide/component',
        label: '组件',
        component: 'Component'
      },
      {
        id: '107',
        module: 'Guide_Vuex',
        path: '/guide/vuex',
        label: '状态管理 Vuex',
        component: 'Vuex'
      },
      {
        id: '108',
        module: 'Guide_Router',
        path: '/guide/router',
        label: '路由 vue-router',
        component: 'Router'
      },
      {
        id: '109',
        module: 'Guide_Axios',
        path: '/guide/axios',
        label: '异步请求 axios',
        component: 'Axios'
      },
      {
        id: '110',
        module: 'Guide_Eslint',
        path: '/guide/eslint',
        label: 'Eslint',
        component: 'Eslint'
      },
      {
        id: '111',
        module: 'Guide_Directory',
        path: '/guide/directory',
        label: '目录结构',
        component: 'Directory'
      },
      {
        id: '112',
        module: 'Guide_TechnologyRelated',
        path: '/guide/technology-related',
        label: '相关技术',
        component: 'TechnologyRelated'
      }
    ]
  },
]
