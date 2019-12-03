<template>
  <div>
    组件的例子，从父组件传过来的消息为：{{ message }}
    <div v-if="isShow">
      <slot></slot>
      <input v-model="inputVal" />
      <button @click="testClick">
        测试点击
      </button>
      <slot name="test"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Case',
  componentName: 'Case',
  props: {
    message: {
      type: String,
    },
    isShow: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      msg: '我是子组件的消息：',
      inputVal: '',
    }
  },
  methods: {
    testClick() {
      this.msg = `我是子组件的消息：${this.inputVal}`;
      this.$emit('btnClick', this.msg);
    }
  }
};
</script>
