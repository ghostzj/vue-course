## 常用指令
 vue.js的常用指令

### v-if 、v-else、 v-else-if
条件渲染

:::demo 根据变量 seen1, seen2 的值(true 或 false )来决定是否插入 p 元素。

```html
<div class="used-directived-demo-1">
  <div class="block">
    <div>
      <input type="checkbox" id="seen1" v-model="seen1">
      <label for="seen1">seen1</label>
      <input type="checkbox" id="seen2" v-model="seen2">
      <label for="seen2">seen2</label>
    </div>
    <p v-if="seen1"> v-if seen1 的值 为 true时可看到</p>
    <p v-else-if="seen2"> v-else-if seen1 的值 为 false，seen2 的值 为 true时可看到</p>
    <p v-else>v-else seen1 的值 为 false，seen2 的值 为 false时可看到</p>
  </div>
  <div class="block">
    <p v-if="seen3 == 'ok'">v-if 变量为表达式</p>
    <p v-if="showFunc()">v-if 可直接调用函数, 函数返回值为true</p>
  </div>

</div>

<script>
  export default {
    data() {
      return {
        seen1: false,
        seen2: false,
        seen3: 'ok',
      }
    },
    methods: {
      showFunc() {
        return this.seen3 === 'ok';
      }
    }
  }
</script>
```
:::

### v-show
:::demo 根据变量 seen 的值(true 或 false )来决定元素是否显示。这个指令与v-if指令的区别是，v-if是插入或删除元素，这个指令是操作display 属性来控制显示隐藏

```html
<div>
  <div>
    <input type="checkbox" id="seen" v-model="seen">
    <label for="seen">seen</label>
  </div>
  <p v-show="seen">v-show seen 的值 为 true时可看到</p>
  <p v-show="seen3 == 'ok'">v-show 变量为表达式</p>
  <p v-show="showFunc()">v-show 可直接调用函数, 函数返回值为true</p>
</div>

<script>
  export default {
    data() {
      return {
        seen: true,
        seen3: 'ok',
      }
    },
    methods: {
      showFunc() {
        return this.seen3 === 'ok';
      }
    }
  }
</script>
```
:::

### v-for
:::demo 注意 使用v-for最好使用key属性，重复的 key 会造成渲染错误。

```html
<div class="used-directived-demo-3">
  <div class="flex">
    <div class="block">
      <p>数组遍历</p>
      <ul>
        <li v-for="item in arrs" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="block">
      <p>对象遍历</p>
      <ul>
        <li v-for="value in objs" :key="index">{{value}}</li>
      </ul>
    </div>
  </div>
  <div class="flex">
    <div class="block">
      <p>数组遍历--多参数</p>
      <p>第一个参数为数组的值，第二个参数为索引</p>
      <ul>
        <li v-for="(item, index) in arrs" :key="index">{{item.name}}-{{index}}</li>
      </ul>
    </div>
    <div class="block">
      <p>对象遍历--带参数</p>
      <p>第一个参数为对象的值，第二个参数为对象的key,第三个参数为索引</p>
      <ul>
        <li v-for="(value, key, index) in objs" :key="key">{{index}} {{key}}: {{value}}</li>
      </ul>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        arrs: [{name: 'a'}, {name: 'b'}, {name: 'c'}],
        objs: {name: 'jack', age: 18, sex: '男'},
        seen3: 'ok',
      }
    },
  }
</script>
```
:::

### v-bind

### v-on

### v-text、v-html
