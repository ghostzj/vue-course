## 双向数据绑定
 view层的DOM和Model层的javascript对象进行绑定

### 基础用法

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
双大括号会将数据解释为普通文本，而非 HTML 代码。

:::demo 注意：变量须定义，可在data属性或者其他地方用this.[变量名]定义，否则无效

```html
<div>
  <p>{{text}}</p>
  <p>{{htmlText}}</p>
</div>

<script>
  export default {
    data() {
      return {
        text: "hello world",
        htmlText: "<p>hello world</p>"
      }
    }
  }
</script>
```
:::

### input/textarea 输入框

表单使用v-model指令创建双向数据绑定

:::demo 注意：变量须定义，可在data属性或者其他地方用this.[变量名]定义，否则无效

```html
<div class="data-binding-demo-1">
  <div class="input">
    <input v-model="message" placeholder="请输入" />
    <p>输入的值是: {{ message }}</p>
  </div>
  <div class="textarea">
    <textarea v-model="message1" placeholder="请输入"></textarea>
    <p>输入的值是: {{ message1 }}</p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        message: "hello world",
        message1: "textarea hello world"
      }
    }
  }
</script>
```
:::

### checkbox 复选框
表单使用v-model指令创建双向数据绑定

:::demo 注意：变量须定义，可在data属性或者其他地方用this.[变量名]定义，否则无效

```html
<div class="data-binding-demo-2">
  <div class="checkbox1">
    <p>基本用法</p>
    <input type="checkbox" id="checkbox1" v-model="checked1">
    <label for="checkbox1">{{ checked1 }}</label>
  </div>
  <div class="checkbox1">
    <p>默认选中</p>
    <input type="checkbox" id="checkbox2" v-model="checked2">
   <label for="checkbox1">{{ checked2 }}</label>
  </div>
  <div class="checkbox2">
    <p>多个复选框</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <p>选择的值为: {{ checkedNames }}</p>
  </div>
  <div class="checkbox2">
    <p>多个复选框默认选中</p>
    <input type="checkbox" id="runoob1" value="Runoob" v-model="checkedNames1">
    <label for="runoob1">Runoob</label>
    <input type="checkbox" id="google1" value="Google" v-model="checkedNames1">
    <label for="google1">Google</label>
    <input type="checkbox" id="taobao1" value="Taobao" v-model="checkedNames1">
    <label for="taobao1">taobao</label>
    <p>选择的值为: {{ checkedNames1 }}</p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        checked1: "",
        checked2: "true", // 或者 boolean的true
        checkedNames: [],
        checkedNames1: ["Runoob"],
      }
    }
  }
</script>
```
:::

### radio 单选框
表单使用v-model指令创建双向数据绑定

:::demo 注意：变量须定义，可在data属性或者其他地方用this.[变量名]定义，否则无效

```html
<div class="data-binding-demo-3">
  <div class="radio">
    <p>基本用法</p>
    <input type="radio" id="runoob" value="Runoob" v-model="picked1">
    <label for="runoob">Runoob</label>
    <input type="radio" id="google" value="Google" v-model="picked1">
    <label for="google">Google</label>
    <p>选中值为: {{ picked1 }}</p>
  </div>
  <div class="radio">
    <p>默认选中</p>
    <input type="radio" id="runoob2" value="Runoob" v-model="picked2">
    <label for="runoob2">Runoob</label>
    <input type="radio" id="google2" value="Google" v-model="picked2">
    <label for="google2">Google</label>
    <p>选中值为: {{ picked2 }}</p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        picked1: "",
        picked2: "Runoob",
      }
    }
  }
</script>
```
:::

### select 列表
表单使用v-model指令创建双向数据绑定

:::demo 注意：变量须定义，可在data属性或者其他地方用this.[变量名]定义，否则无效

```html
<div class="data-binding-demo-4">
  <div class="select">
    <p>基本用法</p>
    <select v-model="selected1">
      <option value="篮球">篮球</option>
      <option value="足球">足球</option>
      <option value="乒乓球">乒乓球</option>
    </select>
    <p>选中值为: {{ selected1 }}</p>
  </div>
  <div class="select">
    <p>默认选中</p>
    <select v-model="selected2">
      <option value="篮球">篮球</option>
      <option value="足球">足球</option>
      <option value="乒乓球">乒乓球</option>
    </select>
    <p>选中值为: {{ selected2 }}</p>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        selected1: "",
        selected2: "篮球",
      }
    }
  }
</script>
```
:::
