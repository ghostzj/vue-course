## 属性方法

### name、componentName
组件的名字，只有作为组件选项时起作用，一般定义为一样的值就好。

### data
主要用来变量定义，只接受 function。

:::demo

```html
<div>
  <p>{{text}}</p>
</div>

<script>
  export default {
    data() {
      return {
        text: "hello world",
      }
    }
  }
</script>
```
:::

### props
用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代

:::demo

```html
<div>
  <case :message="text"></case>
  <div class="flex">
    <div class="block">
      <p>用法</p>
      <p>
      props: {<br/>
        &nbsp;&nbsp;message: {<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;type: String,<br/>
        &nbsp;&nbsp;},<br/>
        &nbsp;&nbsp;message1: String,<br/>
        &nbsp;&nbsp;message2: {<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;type: String,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;default: '',<br/>
        &nbsp;&nbsp;},<br/>
      }
      </p>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        text: "hello world",
      }
    }
  }
</script>
```
:::

### computed
计算属性，可以像绑定普通变量一样绑定计算属性

:::demo

```html
<div>
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>

<script>
  export default {
    data() {
      return {
        message: "hello",
      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>
```
:::
### watch
监听变量的实时变化
:::demo

```html
<div class="flex">
  <div class="block">
    <p>监听变量：<input v-model="a"/></p>
    <p>监听对象：<button @click="btnClick1">Add 1</button></p>
    <p>监听对象$set用法：<button @click="btnClick2">add key in obj</button></p>
    <p>监听数组：<button @click="btnClick3">update arr</button></p>
    <p>监听数组$set用法：<button @click="btnClick4">update arr</button></p>
  </div>
  <div class="block">
    <p>
      数组在下面两种情况无法监听:
      <br/>
      (1)、利用索引直接设置一个数组项时，例如：arr[indexOfItem] = newValue;
      <br/>
      (2)、修改数组的长度时，例如：arr.length = newLength;
      <br/>
      解决办法: this.$set(this.watchArr, 0, {name: 'xiaoyue'});
    </p>
    <p>
      对象在下面两种情况无法监听:
      <br/>
      (1)、对象属性的添加、删除;
      <br/>
      解决办法: this.$set(this.watchObj, 'age', 124);
    </p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        a: "",
        b: { count: 0 },
        b1: {},
        b2: {},
        c: [],
        d: [0],
      }
    },
    methods: {
      btnClick1: function() {
        this.b.count++;
      },
      btnClick2: function() {
        this.b.count++;
        this.b2.count = this.b.count;
        this.$set(this.b1, 'count', this.b.count);
      },
      btnClick3: function() {
        this.c = [1, 2, 3];
        this.d[0]++;
      },
      btnClick4: function() {
        this.$set(this.d, 0, this.d[0]+1);
      }
    },
    watch: {
      a: function(newValue, oldValue) {
        console.log('watch a newValue：', newValue, 'oldValue：', oldValue);
      },
      'b.count': function(newValue, oldValue) {
        console.log('watch b.count newValue：', newValue, 'oldValue：', oldValue);
      },
      b: {
        handler: function (val, oldVal) {
          console.log('watch b object newValue：', val, 'oldValue：', oldVal);
        },
        deep: true
      },
      b1: {
        handler: function (val, oldVal) {
          console.log('watch b1 object newValue：', val, 'oldValue：', oldVal);
        },
        deep: true
      },
      b2: {
        handler: function (val, oldVal) {
          console.log('watch b2 object newValue：', val, 'oldValue：', oldVal);
        },
        deep: true
      },
      c: {
        handler: function (val, oldVal) {
          console.log('watch c Array newValue：', val, 'oldValue：', oldVal);
        },
        deep: true
      },
      d: {
        handler: function (val, oldVal) {
          console.log('watch d Array newValue：', val, 'oldValue：', oldVal);
        },
        deep: true
      }
    }
  }
</script>
```
:::

### mounted
挂载时调用，可以理解为一进入组件并且创建好元素后调用
:::demo

```html
<div>
</div>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted: function() {
      console.log('mounted, mounted, mounted, mounted');
    }
  }
</script>
```
:::

### methods

所有的方法都应写在这里，不应该使用箭头函数来定义 method 函数
