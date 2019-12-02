<template>
  <div>
    <div>
      <router-link to="/components">
        组件例子展示页
      </router-link>
      <router-link to="/dynamic-router/123456">
        动态路由例子展示页
      </router-link>
      <a style="cursor: pointer" @click="routerClick">
        通过js跳转路由
      </a>
      <router-link to="/router/children">
        子路由例子展示页
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {},

  watch: {},

  created() {
  },

  mounted() {
  },

  methods: {
    routerClick() {
      this.$router.push('/dynamic-router/888888');
    },
  }
}
</script>
