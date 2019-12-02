## Vuex 状态管理
不同的组件之间获取同一个变量

### State
主要在state保存变量

:::demo

```html
<div>
  <p>怎么取state里面的值</p>
  <p>通过this.$store.state[变量名]</p>
  <p>state的count: {{count}}</p>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      count() {
        return this.$store.state.count;
      }
    }
  }
</script>
```
:::

### Getter
从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数
:::demo

```html
<div>
  <p>怎么取getters里面的值</p>
  <p>通过this.$store.getters[变量名]</p>
  <p>getters.doneTodos list</p>
  <p v-for="item in $store.getters.doneTodos">{{item.id}}-{{item.text}}</p>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>
```
:::

### Mutation
改变state中的变量
:::demo

```html
<div>
  <p>怎么使用mutation</p>
  <p>通过this.$store.commit(param1, param2)</p>
  <p>其中param1为mutation定义的方法名，param2为参数</p>
  <button @click="click1">Add 1</button>
  <p>state的count: {{$store.state.count}}</p>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      click1() {
        this.$store.commit('COUNT');
      }
    }
  }
</script>
```
:::

### Actions
提交Mutation中的方法，区别是这个可以异步
:::demo

```html
<div>
  <p>怎么使用Actions</p>
  <p>通过this.$store.dispatch(param1, param2)</p>
  <p>其中param1为mutation定义的方法名，param2为参数</p>
  <button @click="click1">Add 1</button>
  <p>state的count: {{$store.state.count}}</p>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      click1() {
        this.$store.dispatch('doUpdateCount');
      }
    }
  }
</script>
```
:::

### Modules
不同的命名空间
:::demo

```html
<div>
  <p>怎么使用Modules</p>
  <p>获取module里面的state, 通过this.$store.state.[moduleName].[变量]</p>
  <p>{{$store.state.a.count}}</p>
  <p>获取module里面的state，通过this.$store.getters[moduleName/变量]</p>
  <p>{{$store.getters['a/addCount']}}</p>
  <p>使用module里面的mutation，通过this.$store.commit[moduleName/方法名]</p>
  <button @click="click1">Add 1</button>
  <p>使用module里面的action，通过this.$store.dispatch[moduleName/方法名]</p>
  <button @click="click2">Add 10</button>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      click1() {
        this.$store.commit('a/updateCount');
      },
      click2() {
        this.$store.dispatch('a/doUpdateCount', 10);
      }
    }
  }
</script>
```
:::
