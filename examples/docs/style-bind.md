## 样式绑定
 通过使用v-bind指令进行class与style绑定，一般使用缩写形式冒号(:)

### class绑定
绑定的变量类型除了字符串之外，还可以是对象或数组
:::demo

```html
<div class="style-bind-demo-1">
  <div class="flex">
    <div class="block">
      <p>字符串</p>
      <p :class="class1">变量为字符串的样式</p>
    </div>
    <div class="block">
      <p>对象</p>
      <p :class="{'p1': isShowP2Class, 'p3': isShowP3Class}">变量为对象</p>
    </div>
    <div class="block">
      <p>数组</p>
      <p :class="[class1, class2, isShowP3Class ? class3 : '']">变量为数组</p>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        class1: 'p1',
        class2: 'p2',
        class3: 'p3',
        isShowP2Class: true,
        isShowP3Class: false,
      }
    },
    methods: {
      btnClick() {
        alert('button click');
      }
    }
  }
</script>
```
:::

### styles绑定
绑定的变量类型是对象或数组，如果是数组语法可以将多个样式对象应用到同一个元素上
:::demo

```html
<div class="style-bind-demo-1">
  <div class="flex">
    <div class="block">
      <p>自定义对象</p>
      <p :style="{color: color1}">变量为自定义对象</p>
    </div>
    <div class="block">
      <p>对象</p>
      <p :style="baseStyles">变量为对象</p>
    </div>
    <div class="block">
      <p>数组</p>
      <p :style="[baseStyles, overridingStyles]">变量为数组</p>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        color1: 'red',
        baseStyles: {color: 'red', 'font-size': '16px'},
        overridingStyles: {color: 'blue', 'font-weight': 'bold'}
        
      }
    }
  }
</script>
```
:::
