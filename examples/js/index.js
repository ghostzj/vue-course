/* global Vue */
// import uiAdapt from 'utils/mobile-adapt'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import styles from '../css/index.scss'
import router from './router'
import { setInitialStates } from './store/state'
import { getStore } from './store'
import App from './app'
import DemoBlock from './components/demo-block'

const { appPrefix } = styles
const state = setInitialStates({ appPrefix })
const store = getStore(state)

// uiAdapt(window, document, 750)
Vue.use(ElementUI);

Vue.component('demo-block', DemoBlock)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
