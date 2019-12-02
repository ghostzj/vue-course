/* global Vue, VueRouter, hljs */

import { getRouteFromNav, resetContentScroll, getDocPageList } from './decorate'

const ErrorPage = () => import(/* webpackChunkName: "Error" */ 'pages/error')
const RouterPage = () => import(/* webpackChunkName: "RouterPage" */ 'pages/router-example')
const DynamicRouterPage = () => import(/* webpackChunkName: "DynamicRouterPage" */ 'pages/router-example/dynamic-router.vue')
const ChildrenRouterPage = () => import(/* webpackChunkName: "ChildrenRouterPage" */ 'pages/router-example/children-router.vue')
const ComponentsPage = () => import(/* webpackChunkName: "ComponentsPage" */ 'pages/components-example')

const decorateRoutes = getRouteFromNav()
const { Principle } = getDocPageList()

let routes = [
  { path: '/', component: Principle },
  { path: '/#/', component: Principle },
  { path: '/home', component: Principle },
  { path: '/router',
    component: RouterPage,
    children: [
      {
        path: 'children',
        component: ChildrenRouterPage
      },
    ]
  },
  { path: '/dynamic-router/:id', component: DynamicRouterPage },
  { path: '/components', component: ComponentsPage }
]
routes = routes.concat(decorateRoutes)
routes.push({ path: '*', component: ErrorPage })

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  resetContentScroll()
  next()
})

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
})

export default router
