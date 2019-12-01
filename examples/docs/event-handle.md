## 事件处理
 通过使用v-on指令进行事件绑定，一般使用缩写形式 @

### 基本用法
事件触发, 触发的方法写在methods
:::demo

```html
<div>
  <div class="flex">
    <div class="block">
      <p>简单语句</p>
      <button @click="counter += 1">Add 1</button>
      <p>点击{{counter}}次.</p>
    </div>
    <div class="block">
      <p>没有参数</p>
      <button @click="btnClick1">no param btn add 1</button>
      <p>点击{{counter1}}次.</p>
    </div>
    <div class="block">
      <p>有参数</p>
      <button @click="btnClick2('hi')">param btn add 1</button>
      <p>点击{{counter2}}次.</p>
      <p>参数是{{message}}.</p>
    </div>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        counter: 0,
        counter1: 0,
        counter2: 0,
        message: '',
        
      }
    },
    methods: {
      btnClick1() {
        this.counter1++;
        
      },
      btnClick2(msg) {
        this.counter2++;
        this.message = msg;
        
      }
    }
  }
</script>
```
:::

### 事件修饰符
事件处理程序中调用 event.preventDefault() 或 event.stopPropagation()等等可通过事件修饰符处理
:::demo

```html
<div class="event-handle-demo-2">
  <div class="flex">
    <div class="block">
      <p>preventDefault</p>
      <a href="www.baidu.com" @click.prevent="aClick">百度</a>
      <p v-if="isShowA">a 阻止默认行为成功.</p>
    </div>
    <div class="block">
      <p>stopPropagation</p>
      <div class="d1" @click.once="d1Click">
        div 元素.
        <p class="p1" @click="p1Click">p元素, 在div内.
          <br/>
          <span class="s1" @click.stop="s1Click">span元素， 在p和div元素内.</span>
        </p>
      </div>
      <p v-if="isShowD">div点击</p>
      <p v-if="isShowP">p点击</p>
      <p v-if="isShowS">span点击</p>
    </div>
  </div>
  <div>
     <p>其他修饰符</p>
     <p>.capture 添加事件监听器时使用事件捕获模式, 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理</p>
     <p>.self 只当在 event.target 是当前元素自身时触发处理函数 即事件不是从内部元素触发的</p>
     <p>.once 点击事件将只会触发一次</p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        isShowA: false,
        isShowD: false,
        isShowP: false,
        isShowS: false,
      }
    },
    methods: {
      aClick() {
        this.isShowA = true;
      },
      d1Click() {
        this.isShowD = true; 
      },
      p1Click() {
        this.isShowP = true; 
      },
      s1Click() {
        this.isShowS = true; 
      }
    }
  }
</script>
```
:::

### 按键修饰符
在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

:::demo

```html
<div>
  <p>例子：</p>
  <p v-text="message"></p>
  <p>按键修饰符</p>
  <p>.enter</p>
  <p>.tab</p>
  <p>.delete (捕获“删除”和“退格”键)</p>
  <p>.esc</p>
  <p>.space</p>
  <p>.up</p>
  <p>.down</p>
  <p>.left</p>
  <p>.right</p>
  <p>系统修饰键</p>
  <p>.ctrl</p>
  <p>.alt</p>
  <p>.shift</p>
  <p>.meta</p>
</div>

<script>
  export default {
    data() {
      return {
        message: '<input @keyup.enter="submit">',
      }
    },
  }
</script>
```
:::
