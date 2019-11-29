import navigatorList from '../app/navigator-list'

const MenuRoutes = {
  DataBinding: () => import(/* webpackChunkName: "DocDataBinding" */ 'docs/data-binding.md'),
  UsedDirective: () => import(/* webpackChunkName: "UsedDirective" */ 'docs/used-directive.md'),
  StyleBind: () => import(/* webpackChunkName: "StyleBind" */ 'docs/style-bind.md'),
  EventHandle: () => import(/* webpackChunkName: "EventHandle" */ 'docs/event-handle.md'),
  Attribute: () => import(/* webpackChunkName: "Attribute" */ 'docs/Attribute.md'),
  Component: () => import(/* webpackChunkName: "Component" */ 'docs/component.md'),
  Vuex: () => import(/* webpackChunkName: "Vuex" */ 'docs/vuex.md'),
  Router: () => import(/* webpackChunkName: "Router" */ 'docs/router.md'),
  Axios: () => import(/* webpackChunkName: "Axios" */ 'docs/axios.md'),
  Eslint: () => import(/* webpackChunkName: "Eslint" */ 'docs/eslint.md'),
  Directory: () => import(/* webpackChunkName: "Directory" */ 'docs/directory.md'),
  TechnologyRelated: () => import(/* webpackChunkName: "TechnologyRelated" */ 'docs/technology-related.md'),
}

function decorateRouteItem(item) {
  // TODO Why the belows code met the ensure is not a function error
  // item.component = r => require.ensure([], () => r(require(`../../docs/${item.component}.md`)), item.component)
  item.component = MenuRoutes[item.component]
  return item
}

function routeNavLoop(data, newRoutes) {
  data.forEach((item) => {
    if (item.component) {
      item = decorateRouteItem(item)
      newRoutes.push(item)
    }
    if (item.children && item.children.length > 0) {
      routeNavLoop(item.children, newRoutes)
    }
  })
}

export function getRouteFromNav() {
  const newList = JSON.parse(JSON.stringify(navigatorList))
  const newRoutes = []
  routeNavLoop(newList, newRoutes)
  return newRoutes
}

export function resetContentScroll() {
  const outer = document.querySelector('.router-content')
  if (outer) {
    outer.scrollTop = 0
  }
}

export function getDocPageList() {
  return MenuRoutes
}
