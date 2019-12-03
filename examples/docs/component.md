## 组件
 
### 基本用法
:::demo

```html
<div>
  <case :message="message"></case>
</div>

<script>
  export default {
    data() {
      return {
        message: 'hello world'
      }
    },
  }
</script>
```
:::

### 插槽
:::demo

```html
<div class="flex">
  <div class="block">
    <p>匿名插槽</p>
    <case :message="message" :is-show="true">
      <i class="el-icon-user"></i>
    </case>
  </div>
  <div class="block">
    <p>具名插槽</p>
    <case :message="message" :is-show="true">
      <i class="el-icon-user" slot="test"></i>
    </case>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        message: 'hello world'
      }
    },
  }
</script>
```
:::

### 自定义事件
:::demo

```html
<div>
  <case :message="message" :is-show="true" @btnClick="btnClick">
    <i class="el-icon-user"></i>
  </case>
  <p>{{sonMsg}}</p>
</div>

<script>
  export default {
    data() {
      return {
        message: 'hello world',
        sonMsg: '',
      }
    },
    methods: {
      btnClick(data) {
        this.sonMsg = data;
      }
    }
  }
</script>
```
:::

