export default [
  {
    id: '1',
    module: 'Guide',
    label: 'Vue Course',
    icon: 'hf-iconfont icon-bianji',
    path: '/guide/principle',
    children: [
      {
        id: '101',
        module: 'Guide_Principle',
        path: '/guide/principle',
        label: '原则',
        icon: 'hf-iconfont icon-bianji',
        component: 'Principle'
      }
    ]
  },
]
