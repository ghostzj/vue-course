<template>
  <div>
    组件的例子，从父组件传过来的消息为：{{ message }}
  </div>
</template>

<script>
export default {
  name: 'Case',
  componentName: 'Case',
  props: {
    message: {
      type: String,
    }
  }
};
</script>
